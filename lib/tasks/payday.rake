namespace :payday do
  desc "check if today is 7 days after the day the account was created and if so then pay the student"

  task allowance: :environment do
    classbanks = Classbank.all
    today = Date.current

    classbanks.each do |classbank|
      last_updated = classbank.updated_at
      interest = 1 + classbank.interest_rate.to_f

      if classbank.allowance_freq == 'weekly'
        date_when_allowance_due = last_updated.since(604800)
      else
        date_when_allowance_due = last_updated.since(2419200)
      end

      if date_when_allowance_due.beginning_of_day() <= today
        classbank.bank_accounts.each do |account|
          new_balance = (account.balance + account.allowance)*interest
          account.balance = new_balance
          account.updated_at = today
          account.save
          puts "allwowance paid to #{account.student.first_name} #{account.student.last_name}. New balance: #{account.balance}"
        end
        classbank.updated_at = today
      else
        puts "No allowance today for '#{classbank.name}', please wait for #{date_when_allowance_due}."
      end

    end
  end
end
