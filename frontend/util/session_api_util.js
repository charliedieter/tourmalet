export const signup = ({ username, email, password }) =>
  $c.ajax({
    url: "api/users",
    method: "POST",
    data: { user: { username, email, password } }
  });

export const login = ({ email, password }) => {
  return $c.ajax({
    url: "api/session/",
    method: "POST",
    data: { user: { email, password } }
  });
};

export const logout = () =>
  $c.ajax({
    url: "api/session",
    method: "DELETE"
  });
