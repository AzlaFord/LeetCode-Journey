import NavBar from './navBarTEMP/navBar';
import { Outlet } from 'react-router-dom'; // Importă Outlet

function App() {
  return (
    <>
      <NavBar />          {/* Asta rămâne mereu afișată */}
      <Outlet />          {/* Aici se încarcă pagina: HomePage, DiscussChat etc. */}
    </>
  );
}

export default App;
