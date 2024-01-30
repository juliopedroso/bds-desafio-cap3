import './styles.css';

import {ReactComponent as Star} from 'assets/images/star.svg'
const ReviewCard = () => {
    return (
        <div className="base-card review-card">
            <div className="card-top-container">
                <Star/> 
                <h2>Maria Silva</h2>
            </div>
            <div className="card-bottom-container">
                <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                
            </div>
        </div>
    );
}

export default ReviewCard;