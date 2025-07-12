// import Content from './components/Content';
// import MarketWatch from './components/CurrencyConverter/MarketWatch';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import SendMoney from './components/SendMoney/SendMoney';
import Convert from './components/CurrencyConverter/Convert';
import Budget from './components/Budget/Budget';


import AuthProvider  from './context/AuthProvider';


import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Layout from './Layout/Layout';
import $ from 'jquery';
import Index from './components/Home/Index';
import Auth from './components/Auth/Auth';
window.$ = window.jQuery = $;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});



function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <Router>
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
                <Route path='/' element={<Index />} />
                <Route path='send' element={<SendMoney />} />
                <Route path="convert" element={<Convert />} />
                <Route path='budget' element={<Budget />} />
                <Route path='auth' element={<Auth />} />

                {/* <Route
                  path="/budget"
                  element={
                    <ProtectedRoute>
                      <Budget />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/convert"
                  element={
                    <ProtectedRoute>
                      <Currency />
                    </ProtectedRoute>
                  }
                /> */}


                {/* catch all */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
      
          </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
