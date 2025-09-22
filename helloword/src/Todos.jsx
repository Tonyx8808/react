import React, { useState, useEffect } from "react";

// Hook personalizzato per il fetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        const json = await response.json();
        if (!ignore) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Hook personalizzato per filtrare i to-do
function useFilteredTodos(todos, searchTerm) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTodos(todos);
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredTodos(filtered);
    }
  }, [todos, searchTerm]);

  return filteredTodos;
}

// Componente TodoList
export default function TodoList() {
  const { data: todos, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [search, setSearch] = useState("");

  const filteredTodos = useFilteredTodos(todos || [], search);

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <div>
      <h1>Lista To-Do</h1>
      
      {/* Campo di input per la ricerca */}
      <input
        type="text"
        placeholder="Cerca un to-do..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTodos.slice(0, 10).map((todo) => (
          <li key={todo.id}>
            {todo.title} [{todo.completed ? "Completato" : "Da fare"}]
          </li>
        ))}
      </ul>
    </div>
  );
}
