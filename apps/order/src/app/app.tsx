import { Provider } from 'react-redux';

import Card from '../components/CardItem';
import { store } from '../redux/store.slice';

export function App() {
  return (
    <Provider store={store}>
      <div>
        <Card />
      </div>
    </Provider>
  );
}

export default App;
