require "faker"

User.destroy_all
Language.destroy_all
Asset.destroy_all
selected_languages = ["English", "French", "Portuguese", "Chinese", "German"]
Language::LANGUAGES.each do | language |
 Language.create(name: language)
end

user = User.create!(
email: "testeuser1@gmail.com",
password: "123456",
username: "Gabs",
first_name: "Gabriel",
last_name:  "Ferro",
birth_date: Faker::Date.birthday(min_age: 12, max_age: 65),
about_me: "This is me, like it or not, here i come. I love learning new languages so i can talk with anyone at anytime",
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
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
native_language: selected_languages.sample,
country: User::COUNTRIES.sample
)

def createAsset(category, color, type, gender, id)
  asset = Asset.create!(
  category: category,
  path: "#{gender}_:#{name};_#{type}_#{id}.png"
    )
end

Asset.create!(category: "base", path: "f_white_face_1.png")
Asset.create!(category: "base", path: "m_white_face_1.png")
Asset.create!(category: "nose", path: "m_nose_1.png")
Asset.create!(category: "eyes", path: "m_blue_eyes_1.png")
Asset.create!(category: "mouth", path: "m_mouth_1.png")
Asset.create!(category: "hair", path: "m_blond_hair_1.png")
Asset.create!(category: "eyebrows", path: "m_blond_eyebrows_1.png")


# ACESSORIES

Asset.create!(category: "acessory", path: "n_:default;_acessory_1", colorized: false)

Asset.create!(category: "acessory", path: "f_:purple;_acessory_2.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:purple2;_acessory_2.png", colorized: true)
Asset.create!(category: "acessory", path: "f_:purple3;_acessory_2.png", colorized: true)

Asset.create!(category: "acessory", path: "f_:default;_acessory_3.png", colorized: false)

Asset.create!(category: "acessory", path: "m_:blond;_acessory_4.png", colorized: false)
Asset.create!(category: "acessory", path: "m_:black;_acessory_4.png", colorized: true)

Asset.create!(category: "acessory", path: "f_:pink;_acessory_5.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:red;_acessory_5.png", colorized: true)

# EYEBROWS

Asset.create!(category: "acessory", path: "n_:blond;_eyebrows_1.png", colorized: false)
Asset.create!(category: "acessory", path: "n_:black;_eyebrows_1.png", colorized: true)

Asset.create!(category: "acessory", path: "n_:blond;_eyebrows_2.png", colorized: false)
Asset.create!(category: "acessory", path: "n_:cocoa;_eyebrows_2.png", colorized: true)
Asset.create!(category: "acessory", path: "n_:black;_eyebrows_2.png", colorized: true)

Asset.create!(category: "acessory", path: "m_:blond;_eyebrows_3.png", colorized: false)
Asset.create!(category: "acessory", path: "m_:black;_eyebrows_3.png", colorized: true)

Asset.create!(category: "acessory", path: "m_:blond;_eyebrows_4.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:blond;_eyebrows_5.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:blond;_eyebrows_6.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:cocoa;_eyebrows_6.png", colorized: true)
Asset.create!(category: "acessory", path: "f_:black;_eyebrows_6.png", colorized: true)
Asset.create!(category: "acessory", path: "f_:red;_eyebrows_6.png", colorized: true)

# EYES            <gender>_:<skin color>;_<category>_<id>.png

Asset.create!(category: "acessory", path: "f_:neutral;_eye_1.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:neutral;_eyec_1.png", colorized: true)

Asset.create!(category: "acessory", path: "f_:black;_eyes_2.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:white;_eyes_2", colorized: false)

Asset.create!(category: "acessory", path: "f_:white;_eyes_3.png", colorized: false)
Asset.create!(category: "acessory", path: "f_:black;_eyes_3.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:neutral;_eyes_4.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:neutral;_eyes_5.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:neutral;_eyes_6.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:neutral;_eyes_7.png", colorized: false)

Asset.create!(category: "acessory", path: "f_:neutral;_eyes_4.png", colorized: false)





4.times do |id|
  createAsset("acessory", "acessory", "f", id+2)
end

3.times do |id|
  Asset.create!(category: "acessory", path: "f_:purple")
end

2.times do |id|
  createAsset("hair", "cocoa_hair", "f", id+1)
end

2.times do |id|
  createAsset("mouth", "mouth", "f", id+1)
end

2.times do |id|
  createAsset("nose", "nose", "f", id+1)
end

1.times do |id|
  createAsset("eyes", "blue_eyes", "f", id+1)
  createAsset("eyebrows", "blond_eyebrows", "f", id+1)
end

2.times do |id|
  createAsset("eyes", "blue_vamp_eyes", "f", id+2)
end



