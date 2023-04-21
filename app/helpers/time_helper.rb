module TimeHelper
  def business_day?(t)
    t.wday != 6 && t.wday != 0
  end

  def next_day_skip_weekends(t)
    return t + 3.days if t.wday == 5
    return t + 2.days if t.wday == 6

    t + 1.day
  end
end
