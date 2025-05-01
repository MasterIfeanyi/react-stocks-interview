// import Content from './components/Content';
// import MarketWatch from './components/CurrencyConverter/MarketWatch';
import SendMoney from './components/SendMoney/SendMoney';
import Convert from './components/CurrencyConverter/Convert';
import { ToastContainer } from 'react-toastify';
import {Routes, Route, Navigate} from "react-router-dom"
import Layout from './Layout/Layout';
import $ from 'jquery';
window.$ = window.jQuery = $;



function App() {

  return (
    <>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 9999 }}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>


      <Layout>
        <Routes>
          <Route path='/' element={<SendMoney />} />
          <Route path="convert" element={<Convert />} />
          {/* catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    
    </>
  );
}

export default App;
