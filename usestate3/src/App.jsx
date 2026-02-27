import React, { useState } from 'react';

// 1. Data ko bahar rakhein (Best Practice)
const locationData = {
  "India": ['Delhi', 'Mumbai', 'Bihar'],
  "USA": ["California", "Texas", "New York"],
  "Canada": ["Ontario", "Quebec", "Alberta"],
  "Australia": ["New South Wales", "Victoria"],
  "Germany": ["Bavaria", "Berlin"]
};

const App = () => {
  const [country, setCountry] = useState("");
  const [statesList, setStatesList] = useState([]); // State ka naam statesList rakha hai

  const handleCountry = (e) => {
    const selectedCountryName = e.target.value;
    setCountry(selectedCountryName);

    if (selectedCountryName) {
      // Agar country mili, toh uski states set karo
      setStatesList(locationData[selectedCountryName]);
    } else {
      // Agar "Select Country" par gaye, toh list khali karo
      setStatesList([]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Country Dropdown</h2> 
      
      {/* Country Select */}
      <select value={country} onChange={handleCountry}>
        <option value="">Select Country</option>
        {Object.keys(locationData).map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>

      <br /><br />

      {/* State Dropdown */}
      <h2>State Dropdown</h2>
      <select disabled={statesList.length === 0}>
        <option value="">Select State</option>
        {statesList.map((s, index) => (
          <option key={index} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}

export default App;