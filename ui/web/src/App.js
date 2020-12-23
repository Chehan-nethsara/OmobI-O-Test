import logo from './logo.svg';
import './App.css';
import Login from "./component/login";
import React from "react";

function App() {
  return (
      // eslint-disable-next-line react/jsx-no-undef
      <BrowserRouter>
       <div className="App">
         {/* eslint-disable-next-line react/jsx-no-undef */}
          <Route path='/login' component={Login} />

         </div>
      </BrowserRouter>
  );
}

export default App;
