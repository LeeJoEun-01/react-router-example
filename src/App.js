import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

const isLogin = false; //true이면 home페이지로 이동 / false면 login 페이지로 이동 

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Login />)} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} /> 
        <Route component={NotFound} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
