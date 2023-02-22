import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import './fonts/verdana.ttf';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './components/Theme';

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ProjectReact">
      <App />
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


