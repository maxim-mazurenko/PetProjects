import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../Pagination';
import { SearchContext } from '../App';

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortName: 'rating',
  });

  React.useEffect(() => {
    setisLoading(true);
    const sortBy = sortType.sortName.replace('-', '');
    const order = sortType.sortName.includes('-') ? 'asc' : 'desc';
    const category = categoryId === 0 ? '' : categoryId;

    const sortByTitle = sortBy === 'title' ? 'asc' : order;

    fetch(
      `https://62c70c892b03e73a58de468b.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${sortByTitle}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setisLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortType={sortType} setSortType={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />) : pizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
