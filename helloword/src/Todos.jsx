import React, { createContext, useState, useEffect } from "react";

// Creiamo il contesto
export const TodoContext = createContext();

// Provider che gestisce i to-do
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchTodos() {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) throw new Error("Errore nella risposta del server");

        const json = await response.json();
        if (!ignore) {
          setTodos(json);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setTodos([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchTodos();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
}
