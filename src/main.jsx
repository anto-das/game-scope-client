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
import AuthLayout from './Layouts/AuthLayout';
import AuthProvider from './Provider/AuthProvider';
import SignUpPage from './Pages/SignUpPage';
import AddReviewPage from './Pages/AddReviewPage';
import AllReviewsPage from './Pages/AllReviewsPage';
import AllReviews from './Components/AllReviews';
import HighestRatedGames from './Components/HighestRatedGames';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<HighestRatedGames></HighestRatedGames>,
        loader:() => fetch("http://localhost:5000/reviews"),
      }
    ]
  },
  {
    path:"/reviews/:id",
    element: <div>reviews details</div>
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
    element:<AllReviewsPage></AllReviewsPage>,
    children:[
      {
        path:"/allreviews",
        element:<AllReviews></AllReviews>,
        loader:() => fetch("http://localhost:5000/reviews/all"),
      },
    ]
  },
  {
    path:"/addreviews",
    element:<AddReviewPage></AddReviewPage>
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
