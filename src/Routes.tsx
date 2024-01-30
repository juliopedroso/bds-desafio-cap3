
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movies" exact>
                <MovieCatalog />
            </Route>
            <Route path="/movies/:movieid" >
                <MovieDetails />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
