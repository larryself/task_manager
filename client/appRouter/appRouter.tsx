import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Users from '../pages/users/users';
import Notifications from '../pages/notifications/notifications';
import NotFound from '../pages/error/notFound';
import Auth from '../pages/auth/auth';
import Profile from '../pages/profile/profile';
import Index from '../pages/index';
import TaskIdPage from '../pages/taskIdPage/taskIdPage';
import Tasks from '../pages/tasks/tasks';
import NewTask from '../pages/newTask/newTask';
import NewUser from '../pages/newUser/newUser';
import UsersId from '../pages/usersId/usersId';
import GlobalContext from '../context/context';
import { authUser } from '../reducer/reducer';
import TaskEdit from '../pages/taskEdit/taskEdit';
import Publish from '../pages/publish/publish';

const AppRouter = () => {
  const { GlobalDispatch }: any = useContext(GlobalContext);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      GlobalDispatch(authUser({ isAuth: true }));
    }
  }, []);
  return localStorage.getItem('auth') ? (
    <Switch>
      <Route component={Users} path={'/users'} exact key={'/users'} />
      <Route component={Notifications} path={'/notifications'} exact key={'/notifications'} />
      <Route component={Profile} path={'/profile'} exact key={'/profile'} />
      <Route component={TaskIdPage} path={'/tasks/:id'} exact key={'/tasks/:id'} />
      <Route component={Publish} path={'/publish/:id'} key={'/publish/:id'} />
      <Route component={Tasks} path={'/tasks'} exact key={'/tasks'} />
      <Route component={NewTask} path={'/new_task'} exact key={'/new_task'} />
      <Route component={TaskEdit} path={'/edit_task/:id'} exact key={'/edit_task'} />
      <Route component={NewUser} path={'/new_user'} exact key={'/new_user'} />
      <Route component={UsersId} path={'/users/:id'} exact key={'/users/:id'} />
      <Route component={Index} path={'/index'} exact key={'/index'} />
      <Route exact path={'/'} render={() => <Redirect to={'/index'} />} />
      <Route component={NotFound} exact key={'/404'} />
    </Switch>
  ) : (
    <Switch>
      <Route component={Auth} path={'/auth'} exact key={'/auth'} />
      <Redirect to={'/auth'} />
    </Switch>
  );
};
export default AppRouter;
