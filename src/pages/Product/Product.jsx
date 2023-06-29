import { useState } from 'react';
import './Product.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = ['../watchCat.jpg', '../winterCat.jpg'];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          {' '}
          udscscndicnsdjcnsdjvcnsdijcnsiucsdjndihvbdsicnsiuchneiuchsjcnsdjchbsicujnacuhencijsbdhcbweucbicujnsiucbiweucsjnbsiucnbsdceuicnsucidcnd
          udscscndicnsdjcnsdjvcnsdijcnsiucsdjndihvbdsicnsiuchneiuchsjcnsdjchbsicujnacuhencijsbdhcbweucbicujnsiucbiweucsjnbsiucnbsdceuicnsucidcnd
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AiOutlineShoppingCart />
          ADD TO CART
        </button>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T Shirt</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <sapn> ADDITIONAL INFO</sapn>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
