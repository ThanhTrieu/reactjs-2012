
const saveToken = (token = null) => {
  // save localStorage
  if(token !== null || token !== ''){
    localStorage.setItem('token_login', token);
  }
}

export const helper = {
  saveToken
}