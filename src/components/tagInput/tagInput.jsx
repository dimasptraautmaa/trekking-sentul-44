import React, { useState } from 'react';
import './tagInput.css';

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      event.preventDefault();
      addTag(input.trim());
      setInput(''); // Clear input after adding a tag
    }
  };

  const addTag = (tag) => {
    if (!tags.includes(tag)) { // Avoid duplicate tags
      setTags([...tags, tag]);
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-container">
      <div className="tag-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button className="remove-btn" onClick={() => removeTag(index)}>×</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add value & press enter"
        className="input tag-input"
      />
    </div>
  );
};

export default TagInput;