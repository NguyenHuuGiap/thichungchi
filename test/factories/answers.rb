FactoryBot.define do
  factory :answer do
    content{Faker::Name.name}
    is_true{false}
    association :question
  end
end

def multiple_question
  realm = FactoryBot.create :realm
  realm_type = FactoryBot.create :realm_type
  specialize = FactoryBot.create :specialize
  FactoryBot.create_list :question, 25, realm: realm, realm_type: realm_type, specialize: specialize
  Question.all.each do |q|
    a = FactoryBot.create_list :answer, 4, question: q
    a.first.update! is_true: true
  end
  user = FactoryBot.create :user
end
