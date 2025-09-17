import React from "react";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const data = Object.fromEntries(form);
        console.log(data);
    };

    return (
        <>
        <h1>Login per accedere al valore dell input </h1>
        <form onSubmit={handleSubmit}>
            <input type="text"  name="first_name"   placeholder="First_name" />
            <input type="text"  name="last_name"    placeholder="Last_name"  />
            <button type="submit">Send</button>
        </form>

        </>
    );
};

export default Login;