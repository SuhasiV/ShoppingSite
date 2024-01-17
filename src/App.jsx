import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './app.scss';
import Contact from './pages/Contact/Contact';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/ShoppingSite/',
        element: <Home />,
      },
      {
        path: '/ShoppingSite/products/:id',
        element: <Products />,
      },
      {
        path: '/ShoppingSite/product/:id',
        element: <Product />,
      },
      {
        path: '/ShoppingSite/contact/',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
