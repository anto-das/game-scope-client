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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<UpcomingGames></UpcomingGames>,
        loader:() => fetch("./UpcomingGame.json")
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
    path:"/signin",
    element:<SignInPage></SignInPage>
  },
  {
    path:"*",
    element:<ErrorLayout></ErrorLayout>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
