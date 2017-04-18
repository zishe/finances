class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :type
      t.money :balance
      t.string :bank
      t.boolean :default
      t.references :user

      t.timestamps
    end

    add_index :accounts, [:user_id, :name], unique: true
  end
end
