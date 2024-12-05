import React from 'react';

const FilterInput = ({ columnKey, setFilters }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setFilters((prev) => ({ ...prev, [columnKey]: value }));
    };

    return <input type="text" placeholder="Filter..." onChange={handleChange} />;
};

export default FilterInput;
