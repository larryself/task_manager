import * as React from 'react';
import './profile.scss';
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import ProfileContainer from './profileContainer/profileContainer';
import GlobalContext from '../../context/context';
import { API_USERS } from '../../constants/URL';

const Profile = () => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { id } = GlobalState.user;
  const [user, setUser] = useState();
  function fetchPost() {
    fetch(`${API_USERS}${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.users));
  }
  useEffect(() => {
    fetchPost();
  }, [id]);
  return (
    <div>
      <Header />
      <Main>{user && <ProfileContainer user={user} />}</Main>
    </div>
  );
};

export default Profile;
