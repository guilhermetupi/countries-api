import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Country from './pages/Country';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/country/:cca2" component={Country} />
      </Switch>
    </BrowserRouter>
  );
}
