import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SearchBody from '../../components/SearchResult/SearchBody';

const Search = () => {
  const location = useLocation();
  console.log(location.state);
  const [searchFilter, setSearchFilter] = useState(location.state);
  return (
    <div>
      <Header type='list' />
      <SearchBody searchFilter={searchFilter} />
      <Footer />
    </div>
  );
};

export default Search;
