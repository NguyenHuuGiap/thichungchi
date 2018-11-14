FactoryBot.define do
  factory :specialize do
    name{["Luật", "Chuyên Ngành", "Lý thuyết"].sample}
    percent_rank{30}
    association :rank_type
  end
end
