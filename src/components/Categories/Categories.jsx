import { Link } from 'react-router-dom';
import './Categories.scss';
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="../menCat.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              MEN
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col col-l">
            <div className="row">
              <img src="../featCat.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  SALE
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="../purseCat.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  PURSE
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="../watchCat.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  WATCH
                </Link>
              </button>
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <img src="../winterCat.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  WINTER
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="../womenCat.jpg" alt="" />
          <button>
            <Link className="link" to="/products/2">
              WOMAN
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
