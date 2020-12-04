class MyLanguagePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    user == record.user
  end

  def destroy?
    user == record.user
  end
end
