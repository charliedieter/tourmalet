json.extract! user, :id, :username, :email, :session_token
json.avatar_url user.avatar_url
json.activities user.activities
json.followers user.followers
json.followings user.followings

json.liked_posts user.liked_posts.pluck(:activity_id)
