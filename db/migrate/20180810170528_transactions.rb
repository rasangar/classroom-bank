class Transactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.belongs_to :bank_account, null: false
      t.belongs_to :student, null: false
      t.string :type_of_transaction, null: false
      t.decimal :amount, precision: 19, scale: 2, default: 0.00

      t.timestamps null: false
    end
  end
end
