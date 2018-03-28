export const fetchUsers = query => {
  return $.ajax({
    url: "api/users",
    data: { query }
  });
};

export const fetchUser = userId => {
  return $.ajax({
    url: `api/users/${userId}`
  });
};

export const createFollow = (followerId, followedId) => {
  return $.ajax({
    url: "api/follows",
    method: "POST",
    data: { followerId, followedId }
  });
};

export const deleteFollow = (followerId, followedId) => {
  return $.ajax({
    url: `api/follows/1`,
    method: "DELETE",
    data: { followerId, followedId }
  });
};

export const updateUser = user => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: "PATCH",
    data: { user, attributes }
  });
};
