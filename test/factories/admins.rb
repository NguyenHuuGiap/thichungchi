FactoryBot.define do
  factory :admin do
    email{Faker::Internet.email}
    password{"Password123"}
  end
end
