class Account < ApplicationRecord
  belongs_to :user
  enum actype: [:cash, :card, :loan]
end
