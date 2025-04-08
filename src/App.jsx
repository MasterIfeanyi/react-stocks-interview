import Content from './components/Content';
import Convert from './components/CurrencyConverter/Convert';
import {Routes, Route, Navigate} from "react-router-dom"
import Layout from './Layout/Layout';
import MarketWatch from './components/CurrencyConverter/MarketWatch';
import $ from 'jquery';
window.$ = window.jQuery = $;

{/* <Routes>
    <Route path="/*" element={<App />} />
  </Routes>
</Router> */}
{/* <Route path="convert" element={<Convert />} /> */}

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Convert />} />
        <Route path="send" element={<Content />} />
        {/* catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
