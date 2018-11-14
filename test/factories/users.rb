FactoryBot.define do
  factory :user do
    number_phone{Faker::Number.number(10)}
    password{"Password123"}
  end
end
