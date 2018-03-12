json.extract! activity, :id,
:title, :description, :polyline, :athlete_id,
:distance, :est_moving_time, :elevation
json.owner activity.user
json.likers activity.liker_ids

json.comments do
  activity.comments.each do |comment|
    json.author comment.author
    json.content comment.content
  end
end


# json.comments activity.comments
