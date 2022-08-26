


# records = JSON.parse(File.read('../../data.json'))
# records.each do |record|
#   Map.create!(record)
# end


Map.create!(
  business_name: "Consolidated Gas 18th St. Station", 
  street_number: 2 , 
  street_name: "18th St", 
  latitude: 40.745700602,
  logitude: -74.007244007,
  status: "open",
  status_data: "10.11.21",
  potential_contaminants_of_concerns: "hex. chromium",
  potential_media_of_concerns: "soil, soil vapor, groundwater"
)

Map.create!(
  business_name: "1st Ave. and E. 76th Street GW", 
  street_number: 1449 , 
  street_name: "1st Ave.", 
  latitude: 40.770277778,
  logitude: -73.954027778,
  status: "closed",
  status_data: "2.20.96",
  potential_contaminants_of_concerns: "tetrachloroethene (PCE)",
  potential_media_of_concerns: "groundwater"
)

Map.create!(
  business_name: "CE - York Ave Station", 
  street_number: 463, 
  street_name: "E 63rd", 
  latitude: 40.760452183,
  logitude: -73.958961984,
  status: "open",
  status_data: "4.2.2020",
  potential_contaminants_of_concerns: "radon",
  potential_media_of_concerns: "soil, soil vapor"
)


Map.create!(
  business_name: "CE E.14th Street Works (East River Generating Sta)", 
  street_number: 237, 
  street_name: "1st Ave", 
  latitude: 40.7280806,
  logitude: -73.973879040,
  status: "open",
  status_data: "5.19.2022",
  potential_contaminants_of_concerns: "PFAS",
  potential_media_of_concerns: "groundwater"
)

Map.create!(
  business_name: "Subway",
  street_number: 77,
  street_name: "99th St",
  latitude: 40.785111387,
  logitude: -73.944991369,
  status: "closed",
  status_data: "06.07.2000",
  potential_contaminants_of_concerns: "trichloroethene (TCE)",
  potential_media_of_concerns: "soil, soil vapor"
)

Map.create!(
  business_name: "Flatiron",
  street_number: 112,
  street_name: "",
  latitude: 40.743185712,
  logitude: -73.990844932,
  status: "open",
  status_data: "07.07.2022",
  potential_contaminants_of_concerns: "tetrachloroethene (PCE)",
  potential_media_of_concerns: "soil"
)


Map.create!(
  business_name: "Exupery",
  street_number: 50,
  street_name: "",
  latitude: 40.718400319,
  logitude: -73.999229695,
  status: "open",
  status_data: "01.04.19",
  potential_contaminants_of_concerns: "coal tar",
  potential_media_of_concerns: "groundwater"
)

Map.create!(
  business_name: "Shipyard",
  street_number: 25,
  street_name: "",
  latitude: 40.734771755,
  logitude: -73.977452552,
  status: "closed",
  status_data: "05.05.21",
  potential_contaminants_of_concerns: "Arsenic, Nickle",
  potential_media_of_concerns: "soil, soil vapor, groundwater"
)

Map.create!(
  business_name: "Drum",
  street_number: 400,
  street_name: "E 76th St",
  latitude: 40.770277778,
  logitude: -73.954027778,
  status: "closed",
  status_data: "06.09.21",
  potential_contaminants_of_concerns: "biological hazards",
  potential_media_of_concerns: "air"
)
