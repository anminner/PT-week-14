import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  }

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((value, index) => (
        <span key={index} onClick={() => handleStarClick(value)}>
          {value <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default Stars;
