import { RequireAuth } from 'react-auth-kit'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layoutpage from './Layout/Layoutpage';
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Book from "./pages/book";
import Post from "./pages/post";
import BookDetail from './pages/bookDetail';
import ErrorPage from './pages/errorPage';
import EditBook from './pages/editBook';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layoutpage />} errorElement={<ErrorPage />}>
        <Route index element={<RequireAuth loginPath={'login'}>
        <Home />
        </RequireAuth>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="book" element={<RequireAuth loginPath={'login'}>
        <Book />
        </RequireAuth>} />
        <Route path="book/:id" element={<RequireAuth loginPath={'login'}>
        <BookDetail />
        </RequireAuth>} />
        <Route path="book/edit/:id" element={<RequireAuth loginPath={'login'}>
        <EditBook />
        </RequireAuth>} />
        <Route path="post" element={<RequireAuth loginPath={'login'}>
        <Post />
        </RequireAuth>} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
