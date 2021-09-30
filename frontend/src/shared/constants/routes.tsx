export default Object.freeze({
  MAIN: {
    name: "Main",
    route: "/",
    subroutes: {
      TEST: {
        name: "Test",
        route: "/Main/Test",
      },
    },
  },
  LOGIN: {
    name: "Login",
    route: "/Login",
  },
});
