require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'
require 'active_record'

require_relative "models/quiz"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "db/db.sqlite3"
)

get '/' do
  erb :index
end

get '/quiz' do
  halt 400, json({result: false, quizzes: []}.to_json) if Quiz.count < 6

  json({result: true, quizzes: Quiz.random_quiz}.to_json)
end
