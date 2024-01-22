import './styles.css';

const Login = () => {
    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            <form>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>
                <div className="mb-4">
                    <input
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