FactoryBot.define do
  factory :question do
    title{Faker::Name.name}
    content{"What's up man"}
    association :realm
    association :realm_type
    association :specialize
  end
end
