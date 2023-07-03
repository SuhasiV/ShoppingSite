import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.scss';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            CHICKCOTOUR
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </div>
          <div className="icons">
            <AiOutlineHeart />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
