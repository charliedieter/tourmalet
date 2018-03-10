export const saveActivity = polyline => (
  $.ajax({
  url: 'api/activities',
  method: 'POST',
  data: { polyline }
}))
