const Login = () => {
  const loginHandle = () => {
    window.location.href = "/state";
  };

  return (
    <>
      <div className="linea">
        <p>e-mail:</p>
        <input></input>
      </div>
      <div className="linea">
        <p>password:</p>
        <input></input>
      </div>
      <div>
        <button onClick={loginHandle}>Login</button>
      </div>
      <a href="/register">Registración</a>
    </>
  );
};

export default Login;
