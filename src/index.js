import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <StrictMode>  
    <Router>
      <App /> 
    </Router>
  </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>  
//     <Router> 
//       <Route path = "/" component={App} />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );