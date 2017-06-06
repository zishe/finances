class Account < ApplicationRecord
  belongs_to :user, dependent: :destroy
  enum actype: [:cash, :card, :loan]
  validates :name, presence: true, uniqueness: { scope: :user }

  monetize :balance_cents, default: 0
end
