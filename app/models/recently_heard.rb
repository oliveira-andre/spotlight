# frozen_string_literal: true

class RecentlyHeard < ApplicationRecord
  belongs_to :user
  belongs_to :album
end
