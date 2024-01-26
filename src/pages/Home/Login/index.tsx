import { useForm } from 'react-hook-form';
import './styles.css';
import { requestBackendLogin } from 'util/request';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {


    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData : FormData) => {
        requestBackendLogin(formData)
        .then(response =>{
            console.log('Sucesso', response);
        })
        .catch(error =>{
            console.log('error', error);
        })
    };

    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>
                <div className="mb-4">
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control base-input "
                        placeholder="Senha"
                        name="password"
                    />
                </div>
                <div className="login-submit">
                    <button className="btn btn-warning">
                        <h6>Fazer login</h6>
                    </button>

                </div>
            </form>
        </div>
    );
}

export default Login;