
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM Naming convention
    <div className="App">
     
      <Header />

      <div className="app_body">
        <Sidebar/>
      </div>
      {/* Header  */}

      {/* App Body */}
      {/* Sidebar  */}
      {/* Feed  */}
    </div>
  );
}

export default App;
