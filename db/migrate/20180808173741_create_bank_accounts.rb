class CreateBankAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :bank_accounts do |t|
      t.belongs_to :student, null: false
      t.belongs_to :classbank, null: false
      t.decimal :balance, precision: 19, scale: 2, default: 0, null: false
      t.decimal :allowance, precision: 19, scale: 2, default: 0

      t.timestamps null: false
    end
  end
end
