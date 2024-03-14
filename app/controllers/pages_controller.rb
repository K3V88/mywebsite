class PagesController < ApplicationController
  def index
    @articles = Article.all
    # Your controller logic here, if any
  end
end
