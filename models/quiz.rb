require "active_record"

class Quiz < ActiveRecord::Base
  def self.random_quiz
    return nil if Quiz.count < 6
    used_indexes = Array 1..Quiz.count
    select_indexes = used_indexes.sample(6)
    response = []
    select_indexes.each do |idx|
      quiz = Quiz.find(idx)
      response << {word: quiz.word, answer: quiz.answer}
    end

    response
  end
end
