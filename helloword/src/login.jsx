import React, { useState } from 'react';

const LoginForm = () => {
    // creo due stati per username e password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // funzione per gestire l invio del form
    const handleSubmit = (e) => {
        e.preventDefault(); // previene il refresh della pagina
        console.log("Username", username);
        console.log("Password", password);
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginForm;