class Event < ApplicationRecord
  validates :name, null: false
  validates :message, null: false
  validates :url, null: false
  validates :end_date, null: false

  belongs_to :user
end
