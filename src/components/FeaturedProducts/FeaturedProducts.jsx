import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Introducing our curated collection of featured products, designed to
          elevate your wardrobe with style and sophistication. Discover our
          range of timeless essentials and on-trend pieces that are crafted with
          impeccable quality and attention to detail. From luxurious cashmere
          sweaters to tailored blazers, our selection offers versatile options
          for any occasion. Embrace the season with our vibrant dresses,
          showcasing playful prints and flattering silhouettes. Complement your
          look with our range of accessories, including statement handbags and
          elegant scarves. With our featured products, you can effortlessly
          express your individuality and embrace the art of dressing well.
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Something is wrong'
          : loading
          ? 'loading'
          : data.map(item => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
