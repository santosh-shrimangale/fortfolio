import './App.css';
import Navbar from './components/Navbar/Navbar';
import RouteComp from './components/RouteComp/RouteComp';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar />
   <RouteComp/>
    </div>
  );
}

export default App;
