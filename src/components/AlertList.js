import React, { useState } from 'react';
import './AlertList.css';

function AlertList() {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    { id: 'section1', text: 'Light thunderstorm with surface wind', location: 'Telangana', imageUrl: '/WhatsApp Image 2024-09-04 at 01.44.26_d6307b87.jpg' },
    { id: 'section2', text: 'Thunder shower with strong wind', location: 'Bellary, Bajpur, Yadgir district', imageUrl: '/WhatsApp Image 2024-09-04 at 02.16.17_37b3a6a6.jpg' },
    { id: 'section3', text: 'Thunderstorm with lightning', location: 'Chachar, Darrang, Gulbarga, Hailakandi', imageUrl: '/WhatsApp Image 2024-09-04 at 02.20.40_895d256c.jpg' },
    { id: 'section4', text: 'Heavy Rain', location: 'Dehradun', imageUrl: '/WhatsApp Image 2024-09-04 at 01.55.22_92c5aa1b.jpg' },
    { id: 'section5', text: 'Thunderstorm', location: 'Anjaw, East Siang, Lohit, Longding, Lower', imageUrl: '/WhatsApp Image 2024-09-04 at 01.58.24_68b613ee.jpg'},
    { id: 'section6', text: 'Landslide', location: 'Uttarkashi', imageUrl: '/WhatsApp Image 2024-09-04 at 02.01.09_327d3638.jpg' },
    { id: 'section7', text: 'Moderate Thunderstorm', location: 'Alijpur, Alligarh, Bind', imageUrl: '/WhatsApp Image 2024-09-04 at 02.04.03_ecb18664.jpg' },
    { id: 'section8', text: 'Light Thunderstorm', location: 'Mumbai, Mumbai Suburban, Palgarh', imageUrl: '/WhatsApp Image 2024-09-04 at 02.06.26_a185a65f.jpg' },
    { id: 'section9', text: 'Moderate Rain', location: 'Lower Dibang Valley, Siang District', imageUrl: 'image9.jpg' },
    { id: 'section10', text: 'Moderate Rain', location: 'Hingoli', imageUrl: '/WhatsApp Image 2024-09-04 at 02.13.36_ccf3bc98.jpg' },
  ];

  const handleAlertClick = (alertId) => {
    setSelectedAlert(alertId);
  };

  const handleClosePopup = () => {
    setSelectedAlert(null);
  };

  const selectedAlertData = alerts.find(alert => alert.id === selectedAlert);

  return (
    <div className="list">
      <div className="head"><h2>Alert List</h2></div>
      <div className="scrollable-container">
        <ul className="scrollable-list">
          {alerts.map(alert => (
            <li key={alert.id}>
              <a href={`#${alert.id}`} onClick={() => handleAlertClick(alert.id)}>
                {alert.text} - {alert.location}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {selectedAlert && selectedAlertData && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h3>Alert Details</h3>
            <p>{selectedAlertData.text}</p>
            <p>Location: {selectedAlertData.location}</p>
            <img src={selectedAlertData.imageUrl} alt={selectedAlertData.text} className="alert-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AlertList;
