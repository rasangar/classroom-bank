# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


teachers = User.create([
  {
    first_name:'Rahul',
    last_name:'Sangar',
    password:'password', email:'rahul@launch.com',
    role:'teacher'
  },
  {
    first_name:'Heather',
    last_name:'Williams',
    password:'password', email:'heather@launch.com',
    role:'teacher'
  }
])

students = User.create([
  {
    first_name: 'Nick',
    last_name:'Alberts',
    password:'password',
    email:'nick@launch.com'
  },
  {
    first_name: 'Brianna',
    last_name:'Kincart',
    password:'password',
    email:'brianna@launch.com'
  }
])

classbanks = Classbank.create([
  {
    name: "Rahul's First Classbank",
    teacher: User.first
  },
  {
    name: "Heather's First Classbank",
    teacher: User.second
  }
])

bank_accounts = BankAccount.create([
  {
    student: User.third,
    classbank: Classbank.first,
    balance: 150
  },
  {
    student: User.fourth,
    classbank: Classbank.first,
    balance: 30
  }
])

transactions = Transaction.create([
  {
    student: User.third,
    bank_account: BankAccount.first,
    type_of_transaction: '2',
    amount: -50
  }
])
