import React from 'react';

const statesInNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
    "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const StateDropdown = () => {
return (
    <select
        name="state"
        id="state"
        aria-placeholder="State"
        className="w-[40%] h-[50px] border-black border-2 p-2"
    >
        <option value="" selected disabled>Select your state</option>
        {statesInNigeria.map((state) => (
        <option key={state} defaultValue={"Select your state"} value={state}>{state}</option>
        ))}
    </select>
    );
};

export default StateDropdown;