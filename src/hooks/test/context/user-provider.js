import AppContext from './index';

const UserProfileProvider = (props) => {
  const infoUsers = {
    id: 1,
    user: 'admin',
    email: 'admin@gmail.com',
    phone: '121323423',
    avatar: "https://media-cdn.laodong.vn/Storage/NewsPortal/2019/11/10/765130/Son-Tung-Mtp.jpg"
  }

  return (
    <AppContext.Provider value={infoUsers}>
      {props.children}
    </AppContext.Provider>
  )

}

export default UserProfileProvider;