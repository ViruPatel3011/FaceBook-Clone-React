
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM Naming convention
    <div className="App">
     
      <Header />

      <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
      {/* Header  */}

      {/* App Body */}
      {/* Sidebar  */}
      {/* Feed  */}
    </div>
  );
}

export default App;
