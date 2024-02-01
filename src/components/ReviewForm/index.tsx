import './styles.css';

const ReviewForm = () => {
    return (
        <div className="base-card container review-form-container">
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className={'form-control base-input'}
                        placeholder="Deixe sua avaliação aqui"
                        name="review"
                    />
                </div>
                <div className="review-submit">
                    <button type="submit" className="btn btn-warning">
                        SALVAR AVALIAÇÃO
                    </button>
                </div>
            </form>
        </div>

    )
};
export default ReviewForm;