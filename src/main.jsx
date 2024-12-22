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
import ReviewDetailsPage from './Pages/ReviewDetailsPage';
import MyReviewsLayout from './Layouts/MyReviewsLayout';
import WatchListPage from './Pages/WatchListPage';
import UpdateReviewPage from './Pages/UpdateReviewPage';
import UpdateReview from './Components/UpdateReview';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<HighestRatedGames></HighestRatedGames>,
        loader:() => fetch("https://game-scope-server.vercel.app/reviews?limit=6"),
      }
    ]
  },
  {
    path:"/reviews/:id",
    element:<PrivateRoute> <ReviewDetailsPage></ReviewDetailsPage></PrivateRoute>,
    loader:({params}) => fetch(`https://game-scope-server.vercel.app/reviews/${params.id}`)
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
        loader:() => fetch("https://game-scope-server.vercel.app/reviews"),
      },
    ]
  },
  {
    path:"/addreviews",
    element:<PrivateRoute><AddReviewPage></AddReviewPage></PrivateRoute>
  },
  {
    path:"/myreviews",
    element:<PrivateRoute><MyReviewsLayout></MyReviewsLayout></PrivateRoute>
  },
  {
    path:"/watch",
    element:<PrivateRoute><WatchListPage></WatchListPage></PrivateRoute>
  },
  {
    path:"/updateReview",
    element:<PrivateRoute><UpdateReviewPage></UpdateReviewPage></PrivateRoute>,
    children:[
      {
        path:"/updateReview/:id",
        element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader:({params}) => fetch(`https://game-scope-server.vercel.app/myreviews/${params.id}`)
      }
    ]
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
