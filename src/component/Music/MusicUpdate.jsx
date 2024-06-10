import React, { useState } from 'react';

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9'
];

const MusicUpdate = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const displayedItems = items.slice(index, index + 3).concat(
    items.slice(0, Math.max(0, index + 3 - items.length))
  );

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slider-button">Previous</button>
      <div className="slider-items">
        {displayedItems.map((item, idx) => (
          <div className="slider-item" key={idx}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="slider-button">Next</button>
    </div>
  );
};

export default MusicUpdate;
