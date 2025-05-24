import { useState } from 'react'
import NavBar from './navBarTEMP/navBar'
import HomePage from './HomePage/HomePage.jsx';
import DiscussChat from './Discuss/DiscussChat.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/discuss',
    element: <DiscussChat />,
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
