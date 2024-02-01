import { useForm } from 'react-hook-form';
import './styles.css';

type Props = {
    movieId: string;
}

type FormData = {
    movieId: number;
    text: string;
}


const ReviewForm = ({ movieId }: Props) => {

    const { register, handleSubmit, formState: { errors }  } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        formData.movieId = parseInt(movieId);
        console.log(formData);

    }

    return (
        <div className="base-card container review-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        {...register('text', {
                            required: 'Campo obrigatório'
                        })}
                        type="text"
                        name="text"
                        className={`form-control base-input ${errors.text ? 'is-invalid' : ''}`}
                        placeholder="Deixe sua avaliação aqui"

                    />
                    <div className="invalid-feedback d-block">
                        {errors.text?.message}
                    </div>
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