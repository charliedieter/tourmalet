export const saveActivity = ({
  polyline,
  title,
  description,
  athlete_id,
  est_moving_time,
  distance,
  elevation,
  type
}) =>
  $c.ajax({
    url: "api/activities",
    method: "POST",
    data: {
      activity: {
        polyline,
        title,
        description,
        athlete_id,
        est_moving_time,
        distance,
        elevation,
        type_of: type
      }
    }
  });

export const fetchActivity = id =>
  $c.ajax({
    url: `api/activities/${id}`
  });

export const fetchActivities = () =>
  $c.ajax({
    url: "api/activities"
  });

export const createLike = activityId =>
  $c.ajax({
    url: "api/likes",
    method: "POST",
    data: { activityId }
  });

export const createComment = ({ activityId, authorId, content }) => {
  return $c.ajax({
    url: "api/comments",
    method: "POST",
    data: { comment: { activity_id: activityId, author_id: authorId, content } }
  });
};
