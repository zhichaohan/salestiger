module AssetHelper
  # this monkeypatch is needed to set the integrity attr to html tags for SRI
  class Webpacker::Manifest
    unless Webpacker::Manifest.instance_methods(false).include?(:original_lookup)
      alias original_lookup lookup
    end

    def lookup(name, pack_type = {})
      asset = original_lookup(name, pack_type)
      (asset.respond_to?(:dig) && asset.dig('src')) || asset      # rubocop:disable Style/SingleArgumentDig
    end

    def lookup_integrity(name, pack_type = {})
      asset = original_lookup(name, pack_type)
      (asset.respond_to?(:dig) && asset.dig('integrity')) || nil  # rubocop:disable Style/SingleArgumentDig
    end
  end

  module Webpacker::Helper
    def javascript_pack_tag(*names, **options)
      generic_packs_with_chunks_tag(:javascript, false, *names, **options)
    end

    def javascript_packs_with_chunks_tag(*names, **options)
      generic_packs_with_chunks_tag(:javascript, true, *names, **options)
    end

    def stylesheet_pack_tag(*names, **options)
      generic_packs_with_chunks_tag(:stylesheet, false, *names, **options)
    end

    def stylesheet_packs_with_chunks_tag(*names, **options)
      generic_packs_with_chunks_tag(:stylesheet, true, *names, **options)
    end

    private

    def generic_packs_with_chunks_tag(type, chunks, *names, **options)
      return if type == :stylesheet && !current_webpacker_instance.config.extract_css?

      entries = if chunks
                  sources_from_manifest_entrypoints(names, type: type)
                else
                  sources_from_manifest_entries(names, type: type)
                end
      entries.map do |entry|
        name = entry.match(%r{\A.+/([^/]+)(?:-[a-z0-9]{8,20})(?:\.chunk)?\.(?:js|css)\z}) && Regexp.last_match(1)
        if name
          integrity = Webpacker.manifest.lookup_integrity(name, type: type)
          if integrity
            options = options.merge(integrity: integrity, crossorigin: 'anonymous')
          end
        else
          logger.error { "ERROR failed to find #{entry} in manifest" }
        end
        case type
        when :stylesheet
          stylesheet_link_tag(entry, **options)
        when :javascript
          javascript_include_tag(entry, **options)
        else
          raise "unknown type: #{type}"
        end
      end.join("\n").html_safe # rubocop:disable Rails/OutputSafety
    end
  end
end
