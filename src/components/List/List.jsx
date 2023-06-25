import './List.scss';
import Card from '../Card/Card';

const List = () => {
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
    <div className="list">
      {data.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
