import { useState } from 'react';
import SearchMovie from './components/search';
import ListMovies from './components/list-movie';
import PaginationMovie from './components/pagination';
import { apiMovie } from './services/api';
import { helpers } from './helpers/common';

const AppMovie = () => {
  const [loading, setLoading] = useState(false);
  const [dataMovie, setDataMovie] = useState({});
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [totalItems, setTotalItems] = useState(0);

  const searchFilm = async (movieName ='', p = 1) => {
    setLoading(true);
    setKeyword(movieName);
    setPage(p);

    const data = await apiMovie.searchMovieByKeyword(movieName, p);
    if(!helpers.isEmptyObject(data)){
      if(data.hasOwnProperty('results')){
        setDataMovie(data.results);
        setTotalItems(data.total_results);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <SearchMovie
        loading={loading}
        search={searchFilm}
      />
      { !loading 
        && !helpers.isEmptyObject(dataMovie) 
        && <ListMovies dataMovie={dataMovie} />
      }
      { !loading 
        && !helpers.isEmptyObject(dataMovie) 
        && <PaginationMovie
              search={searchFilm}
              name={keyword}
              current={page}
              pageSize={20}
              total={totalItems}
            />
      }
    </>
  )
}
export default AppMovie;