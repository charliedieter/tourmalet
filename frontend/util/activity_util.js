export const saveActivity = (
  {polyline,
    title,
    description,
    athlete_id,
    est_moving_time,
    distance,
    elevation}) => (
  $.ajax({
  url: 'api/activities',
  method: 'POST',
  data: { activity:
    {polyline,
      title,
      description,
      athlete_id,
      est_moving_time,
      distance,
      elevation}
    }
}))

export const fetchActivity = id => (
  $.ajax({
    url: `api/activities/${id}`
  })
)

export const fetchActivities = () => (
  $.ajax({
    url: 'api/activities'
  })
)

export const createLike = activityId => (
  $.ajax({
    url: 'api/likes',
    method: 'POST',
    data: { activityId }
  })
)
