import React, { useState, useMemo, useRef, useEffect, useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoList() {
  const { todos, loading, error } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  // Ref per focus automatico
  const searchInputRef = useRef(null);
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Filtraggio ottimizzato con useMemo
  const filteredTodos = useMemo(() => {
    console.log("🔄 Ricalcolo lista filtrata...");
    if (!todos) return [];
    if (!search) return todos;

    const lowerCaseTerm = search.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseTerm)
    );
  }, [todos, search]);

  // Gestione input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  /*
  // 🔹 Versione con useCallback (se servisse)
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  */

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista To-Do</h1>

      <input
        ref={searchInputRef}
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
