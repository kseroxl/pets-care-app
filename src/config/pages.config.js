export default {
  doctor: {
    routes: [
      {
        url: "/",
        component: "HomeDoctor",
        exact: true,
      },
      {
        url: "clients",
        component: "ClientList",
        exact: false,
      },
    ],
  },
  patient: {
    routes: [
      {
        url: "/",
        component: "HomePatient",
        exact: true,
      },
      {
        url: "my_pets",
        component: "MyPets",
        exact: false,
      },
    ],
  },
};
