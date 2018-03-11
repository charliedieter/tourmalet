export const saveActivity = ({polyline, title, description, athlete_id}) => (
  $.ajax({
  url: 'api/activities',
  method: 'POST',
  data: { activity: {polyline, title, description, athlete_id} }
}))

// {
// polyline: "}~kvHmzrr@ba\hnc@jiu@r{Zqx~@hjp@pwEhnc@zhu@zflAbxn@fhjBvqHroaAgcnAp}gAeahAtqGkngAinc@_h|@r{Zad\y|_D}_y@swg@ysg@}llBpoZqa{@xrw@~eBaaX}{uAero@uqGadY}nr@`dYs_NquNgbjAf{l@|yh@bfc@}nr@z}q@i|i@zgz@r{ZhjFr}gApob@ff}@laIsen@dgYhdPvbIren@",
// title: 'my first ride',
// description: 'cold',
// athlete_id: 1
// }
