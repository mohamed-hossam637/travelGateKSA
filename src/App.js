import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'wowjs/dist/wow.min.js';
import 'wowjs/css/libs/animate.css';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
