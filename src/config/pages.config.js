export default {
  doctor: {
    routes: [
      {
        url: "/",
        component: "HomeDoctor",
      },
      {
        url: "clients",
        component: "ClientList",
      },
    ],
  },
  patient: {
    routes: [
      {
        url: "/",
        component: "HomePatient",
      },
    ],
  },
};
