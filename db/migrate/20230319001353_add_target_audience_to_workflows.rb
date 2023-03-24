class AddTargetAudienceToWorkflows < ActiveRecord::Migration[5.2]
  def change
    add_reference :workflows, :target_audience, foreign_key: true
  end
end
