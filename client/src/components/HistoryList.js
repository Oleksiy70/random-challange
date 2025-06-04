// client/src/components/HistoryList.js
import React, { useEffect, useState } from 'react';
import { fetchHistory, deleteHistoryItem } from '../api/task';

const HistoryList = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetchHistory();
        setHistory(res.data.history);
      } catch (err) {
        setError('Помилка отримання історії');
      }
    };
    getHistory();
  }, []);

  const handleDelete = async (id) => {
  try {
    await deleteHistoryItem(id);
    setHistory(history.filter(item => item.id !== id));
  } catch (err) {
    setError('Помилка видалення запису');
  }
};

  return (
    <div className="container">
      <h3>Your Challenge History</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
        {history.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>
                [{new Date(item.chosenAt).toLocaleString()}] {item.Task.description} <em>( {item.Task.category} )</em>
            </span>
            <button onClick={() => handleDelete(item.id)} style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}>
                Delete
            </button>
            </li>
        ))}
        </ul>

    </div>
  );
};


export default HistoryList;