import React, { useState } from 'react';
import { fetchRandomTask } from '../api/task';

const ChallengeCard = () => {
  const [task, setTask] = useState(null);
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const categories = ['Активність', 'Соціальні', 'Інтелектуальні', 'Корисні', 'Розслаблення', 'Психологія', 'Творчі'];

  const getTask = async () => {
    try {
      setError('');
      const res = await fetchRandomTask(category);
      setTask(res.data.task);
      setQuote(res.data.quote);
    } catch (err) {
      setError('Помилка при завантаженні завдання');
      setTask(null);
      setQuote(null);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '500px', margin: '20px auto' }}>
      <h3>Отримати випадкове завдання</h3>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">-- Виберіть категорію --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={getTask} style={{ marginLeft: '10px' }}>Згенерувати</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {task && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Завдання:</strong> {task.description}</p>
          <p><em>Категорія:</em> {task.category}</p>
          {quote && (
            <blockquote style={{ fontStyle: 'italic', marginTop: '20px' }}>
              "{quote.content}" — {quote.author}
            </blockquote>
          )}
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;
