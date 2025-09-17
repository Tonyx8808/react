import { useRef, useEffect } from "react";

const Login = () => {
  const firstName = useRef(); // riferimento al primo input
  const lastName = useRef();  // riferimento al secondo input

  // focus sul primo input al montaggio del componente
  useEffect(() => {
    firstName.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const first = firstName.current.value;
    const last = lastName.current.value;

    console.log("Dati inviati:", { first, last });
    alert(`Firstname: ${first}\nLastname: ${last}`);

    // sposta il focus sul secondo input dopo l'invio
    lastName.current.focus();
  };

  return (
    <>
      <h1>Login per accedere al valore dell'input + focus</h1>
      <p>utilizzando useRef</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          ref={firstName}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          ref={lastName}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Login;
