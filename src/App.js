import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import ViewBook from "./Pages/AddBook/ViewBook/ViewBook";
import LoginPage from "./Pages/Login Page/LoginPage";


function App() {
  return (
    <div className="App">
    {/* <React.Suspanse fallback="Loading....."> */}
<Routes>
<Route path="/" element= {<Home/>}></Route>
<Route path="/add-book" element= {<AddBook/>}></Route>
<Route path="/view-book" element= {<ViewBook/>}></Route>
<Route path="/login-page" element= {<LoginPage/>}></Route>

</Routes>
    {/* </React.Suspanse> */}

    </div>
  );
}

export default App;
