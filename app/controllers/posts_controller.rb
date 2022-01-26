class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    render json:{post: post}  # 11行目で定義した変数postの値を、postというキーとセットでJavaScriptに送信
  end
end
