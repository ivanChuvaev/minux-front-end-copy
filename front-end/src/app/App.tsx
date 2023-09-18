import { store } from '@app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider as AntDConfigProvider, theme, ThemeConfig } from 'antd';
import { FRoutes } from './FRoutes';
import { AuthProvider } from './AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IconContext } from "react-icons";
import { CookiesProvider } from 'react-cookie';
import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack'
import './index.scss';
import { AiOutlineClose } from 'react-icons/ai';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

const CloseSnackbarButton = (props: { snackbarKey: SnackbarKey }) => {
  const snackbar = useSnackbar()
  return (
    <AiOutlineClose className="icon-clickable" onClick={() => snackbar.closeSnackbar(props.snackbarKey)} />
  )
}

export function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <IconContext.Provider value={{ className: 'react-icon' }}>
          <SnackbarProvider action={snackbarKey => <CloseSnackbarButton snackbarKey={snackbarKey} /> }>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <Provider store={store}>
                  <AntDConfigProvider theme={ftheme}>
                    <FRoutes /> 
                  </AntDConfigProvider>
                </Provider>
              </AuthProvider>
            </QueryClientProvider>
          </SnackbarProvider>
        </IconContext.Provider>
      </CookiesProvider>
    </BrowserRouter>
  );
}
