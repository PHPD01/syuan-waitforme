import React from "react";
import "./App.css";
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import StoreIndex from "./stores/StoreIndex";
import Fakenavbar from './components/Fakenavbar.jsx'
import FakeDetail from "./stores/FakeDetail"
// import Table from "./Table/index"

//本標籤管理
//1.route

function App(){


    return (
      <div className="App">
        <Router>
        <Switch>
        <Route path='/page2' exact component={StoreIndex}/>
        <Route path='/page3/:id' component={FakeDetail}/>
        {/* <Route path='/table' component={Table}/> */}

        </Switch>
      </Router>
      </div>
    );
}

export default App;
