import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch('https://coffee-store-server-snowy-xi.vercel.app/coffee'),
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee/>,
    loader: ({params}) => fetch(`https://coffee-store-server-snowy-xi.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
