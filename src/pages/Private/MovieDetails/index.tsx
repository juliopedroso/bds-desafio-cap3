import ReviewForm from "components/ReviewForm";
import ReviewList from "components/ReviewList";

import './styles.css';

const MovieDetails = ()=>{
    return(
        <div className="container movie-details-container">
            <h1>Tela detalhes do filme id: 1</h1>
            <ReviewForm/>
            <ReviewList/>
        </div>
        
    )
};

export default MovieDetails;