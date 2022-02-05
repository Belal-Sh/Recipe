import './App.css';
import Layout from './components/Layout/Layout';
import {
  BrowserRouter,
} from "react-router-dom";

import { RoutersRecipe } from './Routes/Routers';

function App() {


  return (
    <>
      <BrowserRouter>
        <Layout>
          {RoutersRecipe()}
        </Layout>
      </BrowserRouter>
    </>

  );
}

export default App;
