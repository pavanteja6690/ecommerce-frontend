const initialstate = {
  loggedin: false,
};
export const userreducer = (user = initialstate, { type, payload }) => {
  switch (type) {
    case "user":
      return { ...payload, loggedin: true };
    case "signout":
      return { loggedin: false };
    default:
      return user;
  }
};
