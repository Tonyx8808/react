import React, { useState } from 'react';

const LoginForm = () => {
    // creo due stati per username e password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // funzione per gestire l invio del form
    const handleSubmit = (e) => {
        e.preventDefault(); // previene il refresh della pagina
        alert(`Username: ${username}\nPassword: ${password}`);
        console.log("Username", username);
        console.log("Password", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login form</h1>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default LoginForm;