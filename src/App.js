import "./App.css";
// import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
// import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import UserPage from "./components/UserPage/UserPage";
// import Feed from "./components/Feed/Feed";


function App() {
  // const user = null;
  return (
    // BEM Naming convention
    <div className="App">
      {/* {!user ? (
        <Login />
      ) : (
        <> */}
          <Header />
          <div className="app_body">
            <Sidebar />
            <UserPage/>
            {/* <Feed /> */}
        
          </div>
        {/* </>
      )} */}

     
    </div>
  );
}

export default App;
