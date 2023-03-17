class TeamMemberInfoSerializer < ActiveModel::Serializer
  attributes :type,
             :label,
             :location,
             :start_date,
             :icon,
             :date_display
end
