// import Content from './components/Content';
// import MarketWatch from './components/CurrencyConverter/MarketWatch';
import SendMoney from './components/SendMoney/SendMoney';
import Convert from './components/CurrencyConverter/Convert';
import {Routes, Route, Navigate} from "react-router-dom"
import Layout from './Layout/Layout';
import $ from 'jquery';
window.$ = window.jQuery = $;



function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Convert />} />
        <Route path="send" element={<SendMoney />} />
        {/* catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
