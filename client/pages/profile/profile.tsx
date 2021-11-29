import * as React from 'react';
import './profile.scss';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import ProfileContainer from './profileContainer/profileContainer';
import GlobalContext from '../../context/context';
import { getUser } from '../../api';

const Profile = () => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { id } = GlobalState.user;
  const [user, setUser] = useState();
  const loadUser = async () => {
    try {
      const data = await getUser(id);
      setUser(data.users);
    } catch (e) {
      toast.error(`Чтото пошла не тек ${e}`);
    }
  };
  useEffect(() => {
    loadUser();
  }, [id]);
  return (
    <div>
      <Header />
      <Main>{user && <ProfileContainer user={user} />}</Main>
    </div>
  );
};

export default Profile;
