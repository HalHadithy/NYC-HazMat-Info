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

ActiveRecord::Schema[7.0].define(version: 2022_08_26_143308) do
  create_table "comments", force: :cascade do |t|
    t.string "comment_content"
    t.integer "map_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maps", force: :cascade do |t|
    t.string "business_name"
    t.integer "street_number"
    t.string "street_name"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "county"
    t.float "latitude"
    t.float "logitude"
    t.string "status"
    t.string "status_data"
    t.string "potential_contaminants_of_concerns"
    t.string "potential_media_of_concerns"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
