import { useForm } from 'react-hook-form';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/request';
import { useState } from 'react';

type Props = {
    movieId: string;
}

type FormData = {
    movieId: number;
    text: string;
}


const ReviewForm = ({ movieId }: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const [hasError, setHasError] = useState(false);

    const onSubmit = (formData: FormData) => {
        formData.movieId = parseInt(movieId);

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            data: formData,
            withCredentials: true
        }

        requestBackend(config).then(response => {
            setHasError(false);
            console.log("Sucesso ao salvar", response);
        }).catch(error => {
            setHasError(true);
            console.log("Erro ao salvar review", error);
        })
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
                    {hasError &&
                        (<div className="alert alert-danger">
                            Erro ao tentar salvar review
                        </div>)
                    }
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