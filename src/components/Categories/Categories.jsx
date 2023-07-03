import { Link } from 'react-router-dom';
import './Categories.scss';
const Categories = () => {
  return (
    <div className="categories">
      <div className="col col-l left">
        <div className="row">
          <div className="col col-l">
            <div className="row">
              <img src="../tShirtMCat.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="../purseMCat.png" alt="" />
            </div>
            <button className="button" style={{ background: '#b8ebf1' }}>
              <Link className="link" to="/products/1">
                Click here for
                <span style={{ fontWeight: 'bold' }}> MEN </span> CATEGORY
              </Link>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="../watchCat.jpg" alt="" />
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <img src="../winterMCat.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col col-l right">
        <div className="row">
          <div className="col col-l">
            <div className="row">
              <img src="../tShirtWCat.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="../purseCat.jpg" alt="" />
            </div>
            <button className="button" style={{ background: '#f1b8de' }}>
              <Link className="link" to="/products/2">
                Click here for{' '}
                <span style={{ fontWeight: 'bold' }}>WOMEN </span> CATEGORY
              </Link>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row">
              <img src="../skirtCat.jpg" alt="" />
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <img src="../winterCat.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
