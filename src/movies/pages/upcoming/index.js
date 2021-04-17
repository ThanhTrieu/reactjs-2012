import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import ListMovies from '../../components/list-movie';
import PaginationMovie from '../../components/pagination';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';

const { RangePicker } = DatePicker;

const ComingMovie = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [comingMovies, setComingMovies] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [fDate, setFromDate] = useState('');
  const [tDate, setToDate] = useState('');

  const chooseTime = async (t1, t2, p = 1) => {
    setLoading(true);
    setPage(p);

    let fromDate = t2[0];
    let toDate = t2[1];
    let data = await api.getDataComingMovie(fromDate, toDate, page);
    if(data.hasOwnProperty('results')){
      setFromDate(fromDate);
      setToDate(toDate);
      setComingMovies(data.results);
      setTotalPage(data.total_pages);
      setTotalItems(data.total_results);
    }
    setLoading(false);
  }
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <RangePicker
            onChange={(d1, d2) => chooseTime(d1, d2)}
          />
        </Col>
      </Row>
      { !loading 
        &&
        !helper.isEmptyObject(comingMovies)
        &&
        <ListMovies
          loading={loading}
          movies={comingMovies}
        />
      }

      { !loading 
        &&
        !helper.isEmptyObject(comingMovies)
        &&
        <PaginationMovie
          current={page}
          total={totalItems}
          totalPage={totalPage}
          fDate={fDate}
          tDate={tDate}
          change={chooseTime}
        />
      }
      
    </MasterLayoutMovie>
  )
}
export default React.memo(ComingMovie);