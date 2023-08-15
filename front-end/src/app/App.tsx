import { store } from '@app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { FRoutes } from './FRoutes'; 
import './index.scss'; 

export function App() { 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FRoutes /> 
      </Provider>
    </BrowserRouter>
  );
}
