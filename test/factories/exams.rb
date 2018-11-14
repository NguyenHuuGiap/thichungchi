FactoryBot.define do
  factory :exam do
    limit_time{3600}
    remain_time{0}
    result{10}
    association :user
  end
end
