FactoryBot.define do
  factory :question do
    title{Faker::Name.name}
    content{Faker::Name.name}
    association :realm
    association :realm_type
    association :specialize
  end
end
