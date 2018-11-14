FactoryBot.define do
  factory :answer_false do
    content{"Man"}
    is_true{false}
    association :question
  end

  factory :answer_true do
    content{"Girl"}
    is_true{true}
    association :question
  end
end
