import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'reactjs2012';

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
  loginUser
}