class LeadImportMailer < ApplicationMailer
  def notify_complete(lead_import)
    @lead_import = lead_import

    mail(
        to: lead_import.user.email,
        subject: "[CSV IMPORT] Your csv import is complete"
    )
  end
end
