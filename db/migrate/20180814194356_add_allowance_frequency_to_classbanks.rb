class AddAllowanceFrequencyToClassbanks < ActiveRecord::Migration[5.2]
  def change
    add_column :classbanks, :allowance_freq, :string, null:false
    add_column :classbanks, :interest_rate, :string, null:false
  end
end
