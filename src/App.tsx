import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './app.scss';
import CurrentTodo from './Components/Todo/CurrentTodo/CurrentTodo';
import Todo from './Components/Todo/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/:id" element={<CurrentTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
