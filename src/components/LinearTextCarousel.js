import React from 'react';
import './LinearTextCarousel.css';

function LinearTextCarousel() {
  const text = "Welcome to Rescue Mission Hub - Your safety is our priority - Severe Flooding Devastates Telangana - Stay alert, stay safe!!";

  return (
    <div >
      <div className="text-wrapper">
        <div className="text">
          {text}
        </div>
      </div>
    </div>
  );
}

export default LinearTextCarousel;
