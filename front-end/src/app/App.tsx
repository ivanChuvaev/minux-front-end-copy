import { store } from '@app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme, ThemeConfig } from 'antd';
import { FRoutes } from './FRoutes';
import './index.scss';

const color = {
  primary: '#3C9EA5'
}

const ftheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: { colorPrimary: '#3C9EA5', borderRadius: 0 },
  components: {
    DatePicker: {
      colorBorder: color.primary,
      colorTextPlaceholder: 'rgba(255, 255, 255, 0.4862745098)',
      fontSize:  20
    }
  }
}

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider theme={ftheme}>
          <FRoutes /> 
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  );
}
