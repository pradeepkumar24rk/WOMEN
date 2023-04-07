


import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { AuthProvider } from './component/auth';
function App() {
  return (
    <AuthProvider>

      <div className="App">
        <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
        
      </div>
    </AuthProvider>
  );
}

export default App;
