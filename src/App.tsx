import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoon'
import { AuthContextProvider } from './context/AuthContext'

function App() {
 
  return (
    <BrowserRouter>
     <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/room/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
