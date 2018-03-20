export const fetchImages = () =>
  $c.ajax({
    url: "api/images"
  });

export const createImage = ({ activityId, userId, image }) =>
  $c.ajax({
    url: "api/images",
    method: "POST",
    data: { activityId, userId, image }
  });
