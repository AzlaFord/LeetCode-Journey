import NavBar from './navBarTEMP/navBar';
import { Outlet } from 'react-router-dom'; 
function App() {
  return (
    <>
      <NavBar />          
      <Outlet />         
    </>
  );
}

export default App;