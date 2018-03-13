@users.each do |user|
  json.set! user.id do
    json.partial! '/api/users/user', user: user
  end
end

json.activities do
  @users.map(&:activities) do |act|
    json.set! act.id do
      json.partial! '/api/activities/activity', activity: act
    end
  end
end
