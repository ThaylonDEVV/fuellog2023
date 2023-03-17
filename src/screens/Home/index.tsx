import { 
  Container,
  Header,
  UserWrapper,
  CarInfo,
  CarIcon,
  HeaderTextWrapper,
  Greeting,
  CarPlate,
  LogoutButton,
  LogoutIcon, 
  Logo
} from './styles';
import logo from './logo.png' ;
export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <CarInfo>

            <HeaderTextWrapper>
              <Greeting >
                BEM-VINDO 
              </Greeting>
              <Logo source={logo} />
              <CarPlate>
                AAA-9999
              </CarPlate>
            </HeaderTextWrapper>
          </CarInfo>
          <LogoutButton>
            <LogoutIcon name='logout'>

            </LogoutIcon>
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
}

