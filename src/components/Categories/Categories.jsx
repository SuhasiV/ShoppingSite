import { Link } from 'react-router-dom';
import './Categories.scss';
import purseMCat from '../../assets/purseMCat.png';
import watchCatch from '../../assets/watchCat.jpg';
import tshirtMCat from '../../assets/tshirtMCat.jpg';
import winterMCat from '../../assets/winterMCat.jpg';
import tShirtWCat from '../../assets/tShirtWCat.jpg';
import purseCat from '../../assets/purseCat.jpg';
import skirtCat from '../../assets/skirtCat.jpg';
import winterCat from '../../assets/winterCat.jpg';
const Categories = () => {
  return (
    <div className="categories">
      <div className="col col-l left">
        <div className="row">
          <div className="col col-l">
            <div className="row">
              <img src={tshirtMCat} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={purseMCat} alt="" />
            </div>
            <button className="button" style={{ background: '#b8ebf1' }}>
              <Link className="link" to="/ShoppingSite/products/1">
                Click here for
                <span style={{ fontWeight: 'bold' }}> MEN </span> CATEGORY
              </Link>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={watchCatch} alt="" />
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <img src={winterMCat} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col col-l right">
        <div className="row">
          <div className="col col-l">
            <div className="row">
              <img src={tShirtWCat} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={purseCat} alt="" />
            </div>
            <button className="button" style={{ background: '#f1b8de' }}>
              <Link className="link" to="/ShoppingSite/products/2">
                Click here for{' '}
                <span style={{ fontWeight: 'bold' }}>WOMEN </span> CATEGORY
              </Link>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row">
              <img src={skirtCat} alt="" />
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <img src={winterCat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
