class ClassbankSerializer < ActiveModel::Serializer
    attributes :id, :name, :created_date, :teacher_name

    belongs_to :teacher, class_name:"User"
    has_many :students, class_name:"User"
    has_many :bank_accounts

    def created_date
      object.created_at.strftime("%B %d, %Y")
      object.updated_at.strftime("%B %d, %Y")
    end

    def teacher_name
      object.teacher.first_name
    end
end
