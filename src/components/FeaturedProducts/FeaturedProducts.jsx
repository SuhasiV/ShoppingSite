import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: '../feat1.png',
      img2: '../feat2.png',
      title: ' Black Simple T-Shirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: '../feat1.png',
      img2: '../feat2.png',
      title: ' Black Simple T-Shirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img: '../feat1.png',
      img2: '../feat2.png',
      title: ' Black Simple T-Shirt',
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: '../feat1.png',
      title: ' Black Simple T-Shirt',
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          cbsdcbdusujn jsdcnjsdcn dhsb j njcn cnnsdiuciucnsdjc
          dscnsiuchweijcsndc iusdbcibcuescsalc jbdciusbuwncsac jbciuwciwoejc
          jsncuihfceokdwokd jubnciuwefcuiwnwo ciushncuewf suicbewiud
          cecfnehubasc edcuiwebiu icuebc iu
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
