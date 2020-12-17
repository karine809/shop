import Register from "./Register";
import Login from "./Login";
import guest from "../../middlewares/guest";
import auth from "../../middlewares/auth";

export default [
  {
    path: '/signup',
    name: 'Register',
    component: Register,
    meta: {middleware: [guest] }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {middleware: [auth] }
  }
]
