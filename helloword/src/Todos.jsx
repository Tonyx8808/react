import React, { useState, useEffect, useMemo, useRef /*, useCallback */ } from "react";

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

// Componente TodoList
export default function TodoList() {
  const { data: todos, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [search, setSearch] = useState("");

  // 🔹 Ref per l'input di ricerca
  const searchInputRef = useRef(null);

  // 🔹 Imposta il focus sull'input al mount del componente
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // 🔹 Filtraggio ottimizzato con useMemo
  const filteredTodos = useMemo(() => {
    console.log("🔄 Ricalcolo lista filtrata...");

    if (!todos) return [];
    if (!search) return todos;

    const lowerCaseTerm = search.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseTerm)
    );
  }, [todos, search]);

  // 🔹 Funzione semplice
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  /*
  // 🔹 Versione con useCallback (se servisse)
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  */

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <div>
      <h1>Lista To-Do</h1>

      <input
        ref={searchInputRef} // 🔹 collega la ref all'input
        type="text"
        placeholder="Cerca un to-do..."
        value={search}
        onChange={handleSearchChange}
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
