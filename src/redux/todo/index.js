import Todo from './pages/todo';
import { Provider } from 'react-redux';
import store from './store';

const AppTodo = () => {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  )
}
export default AppTodo;