// pages/ReviewPage.js
"use client"
// pages/ReviewPage.js

import { useState } from 'react';

const ReviewPage = () => {
  const [safetyStars, setSafetyStars] = useState(0);
  const [communicationStars, setCommunicationStars] = useState(0);
  const [recommendation, setRecommendation] = useState(null);
  const [praise, setPraise] = useState('');

  const handleSafetyStarsChange = (stars) => {
    setSafetyStars(stars);
  };

  const handleCommunicationStarsChange = (stars) => {
    setCommunicationStars(stars);
  };

  const handleRecommendation = (value) => {
    setRecommendation(value);
  };

  const handlePraiseChange = (event) => {
    setPraise(event.target.value);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#000', marginBottom: '20px' }}>Leave a Review</h1>

        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#000' }}>Safety</h2>
          <div>
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index} onClick={() => handleSafetyStarsChange(index)} style={{ cursor: 'pointer', fontSize: '2rem', color: safetyStars >= index ? '#ffd700' : '#000', textShadow: '0px 0px 2px #000' }}>
                {safetyStars >= index ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#000' }}>Communication</h2>
          <div>
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index} onClick={() => handleCommunicationStarsChange(index)} style={{ cursor: 'pointer', fontSize: '2rem', color: communicationStars >= index ? '#ffd700' : '#000', textShadow: '0px 0px 2px #000' }}>
                {communicationStars >= index ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#000' }}>Would you recommend Trausti?</h2>
          <button onClick={() => handleRecommendation(true)} style={{ fontSize: '1.2rem', marginRight: '10px', backgroundColor: recommendation === true ? '#4caf50' : '#ffffff', color: recommendation === true ? '#ffffff' : '#000', border: '1px solid #4caf50', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>👍 Yes</button>
          <button onClick={() => handleRecommendation(false)} style={{ fontSize: '1.2rem', backgroundColor: recommendation === false ? '#f44336' : '#ffffff', color: recommendation === false ? '#ffffff' : '#000', border: '1px solid #f44336', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>👎 No</button>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#000' }}>Praise</h2>
          <textarea value={praise} onChange={handlePraiseChange} rows="4" style={{ width: '100%', padding: '10px', fontSize: '1.2rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {/* Submit Button wrapped in a div for centering */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleSubmit} style={{ fontSize: '1.2rem', backgroundColor: '#2196f3', color: '#ffffff', border: 'none', padding: '12px 24px', cursor: 'pointer', borderRadius: '5px', marginBottom: '20px' }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
