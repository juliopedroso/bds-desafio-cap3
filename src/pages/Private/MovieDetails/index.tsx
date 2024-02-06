import ReviewForm from "components/ReviewForm";
import ReviewList from "components/ReviewList";

import './styles.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/request";
import { Review } from "types/review";
import { hasAnyRoles } from "util/auth";

type urlParams = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true
    };

    requestBackend(params)
      .then((response) => {
        setReviews(response.data);
      });
  }, [movieId]);

  return (
    <div className="container movie-details-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} />
      )}
      <ReviewList reviews={reviews} />
    </div>

  )
};

export default MovieDetails;