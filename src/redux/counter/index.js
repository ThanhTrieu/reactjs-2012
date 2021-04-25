import { Provider } from 'react-redux';
import store from './store/config-store';
import CounterPage from './pages/counter';

const AppCounter = () => {
  return (
    <Provider store={store}>
      <CounterPage/>
    </Provider>
    
  )
}
export default AppCounter;