import {useContext} from 'react'
import {Context} from '../../contexts/GlobalProvider/context'

import * as S from './styles';
import UserPicture from '../userPicture';
import UserDetails from '../userDetails';
import UserNumbers from '../userNumbers';

function UserContainer() {
  const {infoUser} = useContext(Context)

  if(!infoUser) return null

  return (
    <S.Section>
      <UserPicture url={infoUser.avatar_url} text='qualquer coisa' />
      <UserDetails login={infoUser.login} name={infoUser.login} bio={infoUser.bio}/>
      <UserNumbers 
        public_repos={infoUser.public_repos} 
        followers={infoUser.followers} 
        following={infoUser.following}
      />
    </S.Section>
  );
}

export default UserContainer;
