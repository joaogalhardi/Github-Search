import { Container, ProfilePicture } from './styles';

function UserPicture({url, text}) {
  return (
    <Container>
      <ProfilePicture src={url} alt={text} />
    </Container>
  );
}

export default UserPicture;
