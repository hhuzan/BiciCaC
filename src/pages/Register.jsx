const Register = () => {
  const registerHandle = () => {
    window.location.href = "/";
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
      <button onClick={registerHandle}>Registrarse</button>
    </>
  );
};

export default Register;
