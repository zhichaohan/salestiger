# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_09_185724) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "answer_upvotes", force: :cascade do |t|
    t.bigint "answer_id", null: false
    t.bigint "provider_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_answer_upvotes_on_answer_id"
    t.index ["provider_id"], name: "index_answer_upvotes_on_provider_id"
  end

  create_table "answers", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "provider_id"
    t.string "body", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_upvotes", default: 0, null: false
    t.string "body_html"
    t.string "reddit_id"
    t.index ["provider_id"], name: "index_answers_on_provider_id"
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["reddit_id"], name: "index_answers_on_reddit_id"
  end

  create_table "appointments", force: :cascade do |t|
    t.bigint "provider_id", null: false
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.string "relation_to_self"
    t.boolean "virtual_consultation"
    t.bigint "group_practice_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "notes"
    t.boolean "past", default: false, null: false
    t.bigint "user_id", null: false
    t.index ["group_practice_location_id"], name: "index_appointments_on_group_practice_location_id"
    t.index ["provider_id"], name: "index_appointments_on_provider_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "answer_id", null: false
    t.bigint "provider_id"
    t.bigint "user_id"
    t.string "body", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reddit_id"
    t.index ["answer_id"], name: "index_comments_on_answer_id"
    t.index ["provider_id"], name: "index_comments_on_provider_id"
    t.index ["reddit_id"], name: "index_comments_on_reddit_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "contact_us_submissions", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "question", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "group_practice_locations", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "description", default: "", null: false
    t.integer "num_providers", default: 0, null: false
    t.string "specialties", default: [], null: false, array: true
    t.boolean "telehealth_services"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "health_conditions", force: :cascade do |t|
    t.string "icd10_code", null: false
    t.string "label", null: false
    t.string "full_label", null: false
    t.bigint "parent_health_condition_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_health_condition_id"], name: "index_health_conditions_on_parent_health_condition_id"
  end

  create_table "health_profile_health_conditions", force: :cascade do |t|
    t.bigint "health_profile_id", null: false
    t.bigint "health_condition_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["health_condition_id"], name: "index_health_profile_health_conditions_on_health_condition_id"
    t.index ["health_profile_id"], name: "index_health_profile_health_conditions_on_health_profile_id"
  end

  create_table "health_profile_medications", force: :cascade do |t|
    t.bigint "health_profile_id", null: false
    t.bigint "medication_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["health_profile_id"], name: "index_health_profile_medications_on_health_profile_id"
    t.index ["medication_id"], name: "index_health_profile_medications_on_medication_id"
  end

  create_table "health_profiles", force: :cascade do |t|
    t.date "date_of_birth"
    t.string "birth_sex"
    t.string "gender"
    t.string "allergies", array: true
    t.boolean "drink_alcohol"
    t.integer "drink_alcohol_per_week"
    t.boolean "smoke_cigarettes"
    t.integer "smoke_cigarettes_per_day"
    t.integer "smoke_cigarettes_years"
    t.boolean "smoke_weed"
    t.integer "smoke_weed_per_day"
    t.integer "smoke_weed_years"
    t.string "immunizations", array: true
    t.integer "number_of_covid_shots"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "procedures", array: true
    t.string "family_history", array: true
    t.boolean "vape"
    t.integer "age"
    t.integer "height"
    t.integer "weight"
  end

  create_table "medications", force: :cascade do |t|
    t.string "generic_name", null: false
    t.string "brand_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_name"], name: "index_medications_on_brand_name"
    t.index ["generic_name"], name: "index_medications_on_generic_name"
  end

  create_table "newsletter_submissions", force: :cascade do |t|
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "provider_earnings", force: :cascade do |t|
    t.bigint "provider_id", null: false
    t.date "date", null: false
    t.float "earnings", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["provider_id"], name: "index_provider_earnings_on_provider_id"
  end

  create_table "provider_locations", force: :cascade do |t|
    t.bigint "provider_id", null: false
    t.bigint "group_practice_location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_practice_location_id"], name: "index_provider_locations_on_group_practice_location_id"
    t.index ["provider_id"], name: "index_provider_locations_on_provider_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_url"
    t.integer "num_answers", default: 0, null: false
    t.integer "num_upvotes", default: 0, null: false
    t.string "badge", default: "bronze", null: false
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.string "degree"
    t.string "specialty"
    t.string "slug"
    t.string "bio"
    t.jsonb "education", default: [], array: true
    t.string "specializations", default: [], array: true
    t.string "languages", default: [], array: true
    t.string "awards", default: [], array: true
    t.string "healthgrades_url"
    t.integer "notifications_new_questions", default: 0, null: false
    t.integer "notifications_new_replies", default: 0, null: false
    t.integer "notifications_new_upvotes", default: 0, null: false
    t.integer "notifications_new_appointments", default: 0, null: false
    t.string "reddit_id"
    t.boolean "anonymous", default: false, null: false
    t.string "reddit_flair_text"
    t.index ["email"], name: "index_providers_on_email", unique: true
    t.index ["reddit_id"], name: "index_providers_on_reddit_id"
    t.index ["reset_password_token"], name: "index_providers_on_reset_password_token", unique: true
    t.index ["slug"], name: "index_providers_on_slug", unique: true
  end

  create_table "question_images", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.string "image_url", null: false
    t.string "caption", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_question_images_on_question_id"
  end

  create_table "question_symptoms", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "symptom_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_question_symptoms_on_question_id"
    t.index ["symptom_id"], name: "index_question_symptoms_on_symptom_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "title", default: "", null: false
    t.string "body", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.bigint "user_id", null: false
    t.string "status", default: "draft", null: false
    t.string "payment_intent"
    t.string "payment_intent_client_secret"
    t.integer "num_answers", default: 0, null: false
    t.bigint "display_answer_id"
    t.string "specialty"
    t.bigint "correct_answer_id"
    t.string "reddit_id"
    t.string "reddit_fullname"
    t.string "reddit_url"
    t.string "body_html"
    t.string "health_profile_search_cache"
    t.text "answers_search_cache"
    t.index ["correct_answer_id"], name: "index_questions_on_correct_answer_id"
    t.index ["display_answer_id"], name: "index_questions_on_display_answer_id"
    t.index ["reddit_fullname"], name: "index_questions_on_reddit_fullname"
    t.index ["reddit_id"], name: "index_questions_on_reddit_id"
    t.index ["slug"], name: "index_questions_on_slug", unique: true
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "area", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area"], name: "index_symptoms_on_area"
    t.index ["name"], name: "index_symptoms_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "health_profile_id"
    t.string "user_name", default: "", null: false
    t.string "name", default: "", null: false
    t.string "stripe_customer_id"
    t.string "stripe_subscription_id"
    t.string "stripe_payment_intent_id"
    t.string "stripe_payment_intent_client_secret"
    t.string "payment_status"
    t.string "origin"
    t.string "create_question_title"
    t.string "create_question_body"
    t.string "create_question_specialty"
    t.boolean "show_create_question"
    t.integer "notifications_provider_answered", default: 0, null: false
    t.string "reddit_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["health_profile_id"], name: "index_users_on_health_profile_id"
    t.index ["reddit_id"], name: "index_users_on_reddit_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "answer_upvotes", "answers"
  add_foreign_key "answer_upvotes", "providers"
  add_foreign_key "answers", "providers"
  add_foreign_key "answers", "questions"
  add_foreign_key "appointments", "group_practice_locations"
  add_foreign_key "appointments", "providers"
  add_foreign_key "appointments", "users"
  add_foreign_key "comments", "answers"
  add_foreign_key "comments", "providers"
  add_foreign_key "comments", "users"
  add_foreign_key "health_conditions", "health_conditions", column: "parent_health_condition_id"
  add_foreign_key "health_profile_health_conditions", "health_conditions"
  add_foreign_key "health_profile_health_conditions", "health_profiles"
  add_foreign_key "health_profile_medications", "health_profiles"
  add_foreign_key "health_profile_medications", "medications"
  add_foreign_key "provider_locations", "group_practice_locations"
  add_foreign_key "provider_locations", "providers"
  add_foreign_key "question_images", "questions"
  add_foreign_key "question_symptoms", "questions"
  add_foreign_key "question_symptoms", "symptoms"
  add_foreign_key "questions", "answers", column: "correct_answer_id"
  add_foreign_key "questions", "answers", column: "display_answer_id"
end
