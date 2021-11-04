// 引入navbar
// import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbarr';
// import Carousell from './components/Carousell';
// import Left from './components/Left';
// import Right from './components/Right';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page0 from "./Pages/Page0";
import Page2 from "./Pages/Page2";
// import Home from "../src/components/Home";
// import FoodtypePage from "../src/components/FoodtypePage";
// import CitytypePage from "../src/components/CitytypePage";
// import MemberPage from "../src/components/MemberPage";
// import ResterauntPage from "../src/components/ResterauntPage";


function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* 因為navbar是每頁都有的，所以就直接放在app.js裡 */}
      {/* <Navbarr className="navbar_pos">
      </Navbarr> */}

      <div>
        <Switch>
          <Route exact path="/">
            <Page0 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          {/* <Route exact path="/">
              <Home />
            </Route> */}
          {/* <Route exact path="/foodtypePage">
              <FoodtypePage />
            </Route>
            <Route path="/citytypePage">
              <CitytypePage />
            </Route>
            <Route path="/memberPage">
              <MemberPage />
            </Route>
            <Route path="/resterauntPage">
              <ResterauntPage />
            </Route> */}
        </Switch>
        {/*舉例解釋： Route只要偵測到目前的path「有包含你設定的字串」就會顯示該頁面，
                        當多個route符合時，Switch會導向第一個符合的Route，
                        所以你在http://localhost:3000/#/second 的時候實際上是顯示firstPage。
                        所以要透過在firstPage的Route的props當中加上 exact 這個屬性，
                        這個props會讓Route必須偵測到目前路徑完全符合path中的字串時才會顯示該頁面*/}
      </div>
      {/* </Router> */}

    </div>
  );
}



export default App;


