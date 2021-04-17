import jwt from 'jsonwebtoken';
import axios from 'axios';

const TOKEN_KEY = 'reactjs2012';

const getDataComingMovie = async (fdate, tdate, page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${fdate}&release_date.lte=${tdate}&with_release_type=3|2`;

  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const loginUser = (user, pass) => {
  let token = null;
  if(user === 'admin' && pass === '123'){
    token = jwt.sign({
      id: 1,
      username: user,
      email: "admin@gmail.com",
      phone: "09871223",
      address: "Ha No" 
    }, TOKEN_KEY);
    
    return token;
  }
  return token;
}
export const api = {
  loginUser,
  getDataComingMovie
}