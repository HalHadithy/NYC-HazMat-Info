class CommentsController < ApplicationController

    def index
        # retrieve from Comments table and then deisplay as a json in front end, to the DetailedSiteData 
        comments_data = Comment.all
        render json: comments_data
    end 
   
    def show 
        # get one at a time from the comments table 
        comments_data = Comment.find(params[:id])
        render json: comments_data
    end 

    def create 
        # add a comment to the Comments table and 
        comment = Comment.create!(comment_content: params[:comment_content], map_id: params[])
        render json: comment 
    end 

    def destroy
        # delete a comment to the Comments table and 
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content # this is basically like saying render json with no content 
    end

    def update
        # edit a comment to the Comments table and 
        # in frontend I can say PATCH or PUT
        
        comment = Comment.find(params[:id])
        comment.update(comment_content: params[:comment_content])
        render json: comment 
    end

end

