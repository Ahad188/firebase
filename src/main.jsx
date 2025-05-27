import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Components/LayOut/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Home/Login/Login.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
     {
          path:'/',
          element:<Home></Home>
     },
     {
          path:'/login',
          element:<Login></Login>
     }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}>
          <App />
     </RouterProvider>
  </StrictMode>,
)
