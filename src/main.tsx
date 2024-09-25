import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { GlobalProvider } from 'icon-splash-generator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalProvider>
        <App />
    </GlobalProvider>
  </StrictMode>
);
