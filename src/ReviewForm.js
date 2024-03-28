import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddReview(inputValue);
      setInputValue('');
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write a review..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
