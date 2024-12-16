import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import ErrorLayout from './Layouts/ErrorLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
  <RouterProvider router={router} />
  </StrictMode>,
)
