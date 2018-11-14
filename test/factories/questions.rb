FactoryBot.define do
  factory :question do
    title{Faker::Name.name}
    content{"What's up man"}
    association :specialize
  end
end
