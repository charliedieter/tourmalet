export const fetchImages = () =>
  $.ajax({
    url: "api/images"
  });

export const createImage = ({ activityId, userId, image }) =>
  $.ajax({
    url: "api/images",
    method: "POST",
    data: { activityId, userId, image }
  });
