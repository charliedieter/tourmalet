json.user do
  json.extract! user, :id, :username, :email, :session_token
  json.avatar_url image_path(user.avatar.url(:medium))
  json.followers user.followers
  json.followings user.followings
  json.liked_posts user.liked_posts.pluck(:activity_id)
  json.activity_ids user.activity_ids
end


json.activities do
  user.activities.each do |act|
    json.set! act.id do
      json.partial! '/api/activities/activity.json.jbuilder', activity: act
    end
  end
end
