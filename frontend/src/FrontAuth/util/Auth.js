const Auth = {
  authenticateUser: token => {
    console.log("authencating");
    localStorage.setItem("token", token);
  },
  isUserAuthenticated: () => {
    console.log("i am authenticated");
    return localStorage.getItem("token") !== null;
  },
  deauthenticateUser: () => {
    localStorage.removeItem("token");
  },
  getToken: () => {
    console.log("token got!");
    return localStorage.getItem("token");
  }
};

export default Auth;
