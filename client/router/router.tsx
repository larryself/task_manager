import Users from '../pages/users/users';
import Notifications from '../pages/notifications/notifications';
import NotFound from '../pages/error/notFound';
import Auth from '../pages/auth/auth';
import Profile from '../pages/profile/profile';
import Index from '../pages/index/index';
import TaskIdPage from '../pages/taskIdPage/taskIdPage';
import Tasks from '../pages/tasks/tasks';
import NewUser from '../pages/newUser/newUser';
import UsersId from '../pages/usersId/usersId';

export const privateRoutes = [
  { path: '/404', component: NotFound, exact: true },
  { path: '/index', component: Index, exact: true },
  { path: '/tasks', component: Tasks, exact: true },
  { path: '/tasks/:id', component: TaskIdPage, exact: true },
  { path: '/users', component: Users, exact: true },
  { path: '/users/:id', component: UsersId, exact: true },
  { path: '/notifications', component: Notifications, exact: true },
  { path: '/profile', component: Profile, exact: true },
  { path: '/new_user', component: NewUser, exact: true },
  { path: '/auth', component: Auth, exact: true },
];

export const publickRoutes = [{ path: '/auth', component: Auth, exact: true }];
