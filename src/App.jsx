import { Navbar, Footer, Welcome, Loader, Services, Transactions } from './components';
import './App.css';

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>      
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App