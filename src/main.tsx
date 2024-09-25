import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { GlobalProvider } from 'icon-splash-generator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuthenticated = true;
const packageType = 'premium';
const role = 'admin';


root.render(
  <StrictMode>
    <GlobalProvider isAuthenticated={isAuthenticated} packageType={packageType} role={role}>
        <App />
    </GlobalProvider>
  </StrictMode>
);
