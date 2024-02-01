import ReviewCard from "components/ReviewCard";
import './styles.css';
import { Review } from "types/review";

type Props = {
    reviews: Review[];
}
const ReviewList = ({ reviews }: Props) => {
    return (

        <div className="base-card review-list-container">
            {reviews.map((review) => (
            <ReviewCard review={review} />    
            ))}
        </div>

    );
}

export default ReviewList;