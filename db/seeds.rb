require "faker"

User.destroy_all
Language.destroy_all
selected_languages = ["English", "French", "Portuguese", "Chinese", "German"]
Language::LANGUAGES.each do | language |
 Language.create(name: language)
end

ids = []
selected_languages.each do |language|
  id = Language.where(name: language).first.id
  ids << id
end

user = User.create!(
email: "testeuser1@gmail.com",
password: "123456",
username: "Gabs",
first_name: "Gabriel",
last_name:  "Ferro",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "This is me, like it or not, here i come. I love learning new languages so i can talk with anyone at anytime",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser2@gmail.com",
password: "123456",
username: "Filip",
first_name: "Filipe",
last_name:  "Alencar",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "The more inhuman we became the more we understood each other as humans, my name is Filipe an i am crazy about coding, thats why i want to improve my english",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser3@gmail.com",
password: "123456",
username: "Gui",
first_name: "Guilherme",
last_name:  "Lima",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "I´m a brazilian guy from Rio de Janeiro that really likes to travel around to learn new cultures and languages",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser4@gmail.com",
password: "123456",
username: "Mat",
first_name: "Matheus",
last_name:  "Penchel",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "The best coder there is, i love computer and rock. Now, i´ve decide to try something new and learn a new language",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser5@gmail.com",
password: "123456",
username: "Tatchi",
first_name: "Tabata",
last_name:  "Wiggers",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "I´m passionate about nature, specially dogs. I really like to travel and experience cultures as locals, thats why i want to improve my language skills",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser6@gmail.com",
password: "123456",
username: "Ju",
first_name: "Julia",
last_name:  "Frederico",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "I´m a polyglot always looking for ways to improve. Today i can speak 6 languages and i hope to learn a new one this year",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser7@gmail.com",
password: "123456",
username: "Cyn",
first_name: "Cynthia",
last_name:  "Tsai",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "A true rock lover, i´m a musician and a polyglot. I want to be able to compose songs in other languages",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser8@gmail.com",
password: "123456",
username: "Kenny",
first_name: "Ken",
last_name:  "Wall",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "Although i already speak a few languages, i really think that learn other languages are really important for me",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser9@gmail.com",
password: "123456",
username: "Rowazinho",
first_name: "Rowan",
last_name:  "Douglas",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "I believe that it is never too late to learn something new.",
language_id: ids.sample,
country: User::COUNTRIES.sample
)

user = User.create!(
email: "testeuser10@gmail.com",
password: "123456",
username: "Tomazinho",
first_name: "Tomas",
last_name:  "Gomes",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "We only live once so it is better to learn as much as possible while you still can",
language_id: ids.sample,
country: User::COUNTRIES.sample
)



# user = User.create!(
# email: "testeuser1@gmail.com",
# password: "123456",
# username: "Gabs",
# first_name: "Gabriel",
# last_name:  "Ferro",
# birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
# about_me: "This is me, like it or not, here i come. I love learning new languages so i can talk with anyone at anytime",
# language_id: ids.sample,
# country: User::COUNTRIES.sample
# )
