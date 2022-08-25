class MapsController < ApplicationController

    def show 
        # retrieve from Map table and then deisplay as a json in front end 
        maps_data = Map.all
        render json: maps_data
    end 


    def show_data
        # retrieve from Map table and then deisplay as a json in front end 
        site_data = Map.find(params[:id])
        render json: site_data
    end 


end
