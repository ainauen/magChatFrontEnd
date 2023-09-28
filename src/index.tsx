import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bulma/css/bulma.min.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig, loginApiRequest} from './AuthConfig';
import axios from 'axios';

const msalInstance = new PublicClientApplication(msalConfig);

//axios.defaults.baseURL = "https://localhost:44377/api/"

axios.interceptors.request.use(
  async (response) => {
    const account = msalInstance.getAllAccounts()[0];
    const msalResponse = await msalInstance.acquireTokenSilent({
      ...loginApiRequest,
      account: account,
    });
    console.log(`response ${msalResponse.accessToken}`)
    var test = `${ msalResponse.accessToken }`;
    var test2 = `Bearer ${ msalResponse.accessToken }`;
    console.log(test)
    console.log(response)
    response.headers.Authorization = test2  ;
    console.log(response)
    console.log(`response after  ${response}`)
    return response;
  },
  (err) => {
    return Promise.reject(err);
    
  }
);

// ReactDOM.render(
//   <React.StrictMode>
//     <MsalProvider instance={msalInstance}>
//       <App />
//     </MsalProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

 const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
 );
 root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
