import React from 'react';

const citiesInLagos = [
    "Lagos Island", "Ikoyi", "Victoria Island", "Lekki", "Ajah", "Epe",
    "Badagry", "Ikorodu", "Ikeja", "Surulere", "Yaba", "Mushin",
    "Apapa", "Oshodi", "Maryland", "Ketu", "Ogudu", "Alimosho",
    "Agege", "Amuwo-Odofin"
];

const CityDropdown = () => {
return (
    <select
        name="city"
        id="city"
        aria-placeholder="City"
        className="w-[55%] h-[50px] border-black border-2 p-2"
    >
        <option value="" selected disabled>Select your city</option>
        {citiesInLagos.map((city) => (
        <option key={city} value={city}>{city}</option>
    ))}
    </select>
);
};

export default CityDropdown;