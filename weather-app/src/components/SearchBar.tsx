import React from "react";

const SearchBar: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
    const [city, setCity] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;