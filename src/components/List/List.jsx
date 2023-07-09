import useFetch from '../../hooks/useFetch';
import './List.scss';
import Card from '../Card/Card';

const List = ({ subCats, sort, catId, maxPrice }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${
      sort === 'asc' ? 'asc' : 'desc'
    }`

    //&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`

    //const { data, loading, error } = useFetch(
    //`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //  item => `&[filters][sub_categories][id][$eq]=${item}`
    //)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  console.log(data);

  return (
    <div className="list">
      {error
        ? 'something wrong occured'
        : loading
        ? 'loading'
        : data?.map(item => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
