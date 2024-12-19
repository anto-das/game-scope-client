import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import ErrorLayout from './Layouts/ErrorLayout';
import SignInPage from './Pages/SignInPage';
import UpcomingGames from './Components/UpcomingGames';
import AuthLayout from './Layouts/AuthLayout';
import AuthProvider from './Provider/AuthProvider';
import SignUpPage from './Pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<UpcomingGames></UpcomingGames>,
      }
    ]
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/signin",
        element:<SignInPage></SignInPage>
      },
      {
        path:"/auth/signup",
        element:<SignUpPage></SignUpPage>
      }
    ]
  },
  {
    path:"/allreviews",
    element:<div>hello all reviews</div>
  },
  {
    path:"/addreviews",
    element:<div>hello add reviews</div>
  },
  {
    path:"/myreviews",
    element:<div>hello my reviews</div>
  },
  {
    path:"/watch",
    element:<div>My watch list</div>
  },
  {
    path:"*",
    element:<ErrorLayout></ErrorLayout>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
