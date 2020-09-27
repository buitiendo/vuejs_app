class TodosController < ApplicationController
  def index
    @todos = Todo.all
    json_response @todos
  end

  def create
    @todo = Todo.create! todo_params
    json_response @todo, :create
  end

  private

  def todo_params
    params.permit :title, :created_by
  end
end
