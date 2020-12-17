
import User from "./User";
import auth from "../../middlewares/auth";

export  default [
  {
    path: '/user/dashboard',
    name: 'User-Dashboard',
    component: User,
    meta: {middleware: [auth] }
  }
]
