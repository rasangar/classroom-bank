class CreateClassbankTable < ActiveRecord::Migration[5.2]
  def change
    create_table :classbanks do |t|
      t.string :name, null: false
      t.belongs_to :teacher, null: false

      t.timestamps null: false
    end
  end
end
