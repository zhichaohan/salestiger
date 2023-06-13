const { environment } = require('@rails/webpacker')

const customConfig = {
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false
    }
  },
  optimization: {
    sideEffects: false
  }
};

environment.config.delete('node.dgram')
environment.config.delete('node.fs')
environment.config.delete('node.net')
environment.config.delete('node.tls')
environment.config.delete('node.child_process')

environment.config.merge(customConfig);

// Webpacker uses this plugin to generate its manifest but
// at present it does not generate the integrity for each asset.
const manifestPlugin = environment.plugins.get('Manifest');
manifestPlugin.options.integrity = true;
manifestPlugin.options.integrityHashes = ['sha256'];

module.exports = environment
