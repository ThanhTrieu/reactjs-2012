
import UserProvider from './context/user-provider';
import NavbarComponent from './components/navbar';

const AppHooks = () => {
  return (
    <UserProvider>
      <NavbarComponent/>
    </UserProvider>
    
  )
}
export default AppHooks;