class CreateMaps < ActiveRecord::Migration[7.0]
  def change
    create_table :maps do |t|
      t.string :BUSINESS_NAME
      t.integer :STREET_NUMBER
      t.string :STREET_NAME
      t.string :CITY
      t.string :STATE
      t.integer :ZIP
      t.string :COUNTY
      t.float :LATITUDE
      t.float :LONGITUDE
      t.string :STATUS
      t.string :STATUS_DATE
      t.string :POTENTIAL_CONTAMINANTS_OF_CONCERN
      t.integer :QUANTITY_RELEASED_GALLONS
      t.string :POTENTIAL_MEDIA_OF_CONCERN
      t.text :SITE_HISTORY
      t.string :BEGIN_DATE
      t.string :LEAK_REPORTED_DATE
      t.string :HOW_DISCOVERED
      t.string :HOW_DISCOVERED_DESCRIPTION
      t.string :DISCHARGE_SOURCE
      t.string :DISCHARGE_CAUSE
      t.string :STOP_METHOD
      t.string :STOP_DESCRIPTION
      t.string :DISADVANTAGED_COMMUNITY

      t.timestamps
    end
  end
end
