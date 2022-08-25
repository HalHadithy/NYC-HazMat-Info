Rails.application.routes.draw do

  # get all the info from the maps database
  get '/map_data', to: 'maps#show' 
  # idk if I need this but we can now get each individual site from the maps database
  get '/map_data/:id', to: 'maps#show_data'

  resources :comments
  # this creates all the CRUD stuff: show create edit destory

  # rails routes in terminal will tell you all the routes you have available to you



  # get '/retrieve_comments', to: 'comment#get_comments'
  # post '/create_comment', to: 'comment#create_comment'
  # destroy 'delete_comment/:id', to 'comment#destroy_comment'
  # patch 'edit_comment/:id', to 'comment#edit_comment'

end
