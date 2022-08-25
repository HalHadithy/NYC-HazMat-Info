# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_25_150229) do
  create_table "comments", force: :cascade do |t|
    t.string "comment_content"
    t.integer "map_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maps", force: :cascade do |t|
    t.string "BUSINESS_NAME"
    t.integer "STREET_NUMBER"
    t.string "STREET_NAME"
    t.string "CITY"
    t.string "STATE"
    t.integer "ZIP"
    t.string "COUNTY"
    t.float "LATITUDE"
    t.float "LONGITUDE"
    t.string "STATUS"
    t.string "STATUS_DATE"
    t.string "POTENTIAL_CONTAMINANTS_OF_CONCERN"
    t.integer "QUANTITY_RELEASED_GALLONS"
    t.string "POTENTIAL_MEDIA_OF_CONCERN"
    t.text "SITE_HISTORY"
    t.string "BEGIN_DATE"
    t.string "LEAK_REPORTED_DATE"
    t.string "HOW_DISCOVERED"
    t.string "HOW_DISCOVERED_DESCRIPTION"
    t.string "DISCHARGE_SOURCE"
    t.string "DISCHARGE_CAUSE"
    t.string "STOP_METHOD"
    t.string "STOP_DESCRIPTION"
    t.string "DISADVANTAGED_COMMUNITY"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
