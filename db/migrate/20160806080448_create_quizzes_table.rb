class CreateQuizzesTable < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :word
      t.string :answer

      t.timestamps
    end
  end
end
