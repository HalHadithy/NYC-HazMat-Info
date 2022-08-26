class CreateMaps < ActiveRecord::Migration[7.0]
  def change
    create_table :maps do |t|
      t.string :business_name
      t.integer :street_number
      t.string :street_name
      t.float :latitude
      t.float :logitude
      t.string :status
      t.string :status_data
      t.string :potential_contaminants_of_concerns
      t.string :potential_media_of_concerns

      t.timestamps
    end
  end
end
