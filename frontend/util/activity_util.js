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
