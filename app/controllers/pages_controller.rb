class PagesController < ApplicationController
  def index
    @articles = Article.all
    # Your controller logic here, if any
  end

  def about
  end

  def staff
  end

  def tracker
  end
end
