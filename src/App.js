import React, { useState } from 'react';
import CityFunctional from './components/CityFunctional';
import CityClass from './components/CityClass';
import BookFunctional from './components/BookFunctional';
import BookClass from './components/BookClass';

function App() {
  const [view, setView] = useState('cityFunc');

  return (
    <div>
      <h1>React Завдання</h1>
      <div>
        <button onClick={() => setView('cityFunc')}>Місто (Функціональний)</button>
        <button onClick={() => setView('cityClass')}>Місто (Класовий)</button>
        <button onClick={() => setView('bookFunc')}>Книга (Функціональний)</button>
        <button onClick={() => setView('bookClass')}>Книга (Класовий)</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {view === 'cityFunc' && <CityFunctional />}
        {view === 'cityClass' && <CityClass />}
        {view === 'bookFunc' && <BookFunctional />}
        {view === 'bookClass' && <BookClass />}
      </div>
    </div>
  );
}

export default App;
