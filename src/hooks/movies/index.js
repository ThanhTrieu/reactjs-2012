import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import ListMovies from './components/list-movies';
import PaginationMovies from './components/pagination';
import SwitchLanguage from './components/switch-language';
import { apiMovie } from './services/api';
import { helpers } from './helpers/common';
import UserProfileProvider from './context/user-provider';

const AppMovies = () => {
  // tao state
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const [page, setPage] = useState(1);
  const [dataMovies, setDataMovies] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  // tuong duong nhu componentDidMount trong class component hoac nhu la componentDidUpdate trong class
  useEffect(() => {
    const getData = async () => {
      setLoading(true); // cap nhat state loading ve true
      // call api
      const data = await apiMovie.getDataMovies(language, page);
      if(!helpers.isEmptyObject(data)){
        if(data.hasOwnProperty('results')){
          setDataMovies(data.results);
          setTotalItems(data.total_results);
          setTotalPage(data.total_pages);
        }
      }
      setLoading(false);
    }
    getData();
  },[page, language]);

  // viet ham phan trang - cap nhat lai state page
  const changePage = (p) => {
    if(p > 0 && p <= totalPage){
      setPage(p);
    }
  }

  // ham chuyen doi ngon ngu
  const changeLanguage = (lang) => {
    if(lang !== ''){
      setLanguage(lang)
    }
  }

  return(
    <UserProfileProvider>
      <Row>
        <Col span={20} offset={2}>
          <SwitchLanguage
            change={changeLanguage}
          />
          <ListMovies
            dataMovies={dataMovies}
            loading={loading}
          />
          {!loading && !helpers.isEmptyObject(dataMovies) ?  <PaginationMovies
            currentPage={page}
            totalItems={totalItems}
            pageSize={20}
            changePage={changePage}
          /> : null}
          
        </Col>
      </Row>
    </UserProfileProvider>
  )
}
export default AppMovies;