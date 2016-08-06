require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

require_relative "models/quiz"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "db/db.sqlite3"
)

get '/' do
  Quiz.count.to_s

end

