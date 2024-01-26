
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieCatalog from 'pages/Home/MovieCatalog';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/movies" >
                <MovieCatalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
