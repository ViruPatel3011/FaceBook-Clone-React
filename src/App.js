import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
// import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import UserPage from "./components/UserPage/UserPage";
import Feed from "./components/Feed/Feed";




// function App() {
//   // const user = null;
//   return (
//     // BEM Naming convention
//     <div className="App">
//       {/* {!user ? (
//         <Login />
//       ) : (
//         <> */}
//           <Header />
//           <div className="app_body">
//             <Sidebar />
//             {/* <UserPage/> */}
//             <Feed />
        
//           </div>
//         {/* </>
//       )} */}

     
//     </div>
//   );
// }


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/user" element={<UserPage />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
