import {
  Container,
  Name,
  Username,
  Description
} from './styles'

function UserDetails({name,login,bio}){
  return(
    <Container>
      <Name>{name}</Name>
      <Username>#{login}</Username>
      <Description>{bio}</Description>
    </Container>
  )
};

export default UserDetails;