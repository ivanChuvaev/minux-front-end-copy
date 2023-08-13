import ReactDOM from 'react-dom/client';
import { App, reportWebVitals } from '@app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />); 

reportWebVitals();
