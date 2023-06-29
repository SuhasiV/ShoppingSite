import './Cart.scss';
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: '../feat1.png',
      img2: '../feat2.png',
      title: ' Black Simple T-Shirt',
      desc: ' Black Simple T-Shirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: '../feat1.png',
      img2: '../feat2.png',
      desc: ' Black Simple T-Shirt',
      title: ' Black Simple T-Shirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.desc.substring(0, 100)}</p>
            <div className="price">1 X ${item.price}</div>
          </div>
          <AiOutlineDelete className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
