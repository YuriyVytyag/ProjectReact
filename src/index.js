import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'App';
import './index.css';
import './fonts/verdana.ttf';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './components/Theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

//  <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <Provider>
//           <BrowserRouter basename="/ProjectReact">
//             <App />
//           </BrowserRouter>
//       </Provider>
//     </ThemeProvider>
//     </React.StrictMode>


