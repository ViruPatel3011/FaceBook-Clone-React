import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM Naming convention
    <div className="App">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* Header  */}

      {/* App Body */}
      {/* Sidebar  */}
      {/* Feed  */}
    </div>
  );
}

export default App;
