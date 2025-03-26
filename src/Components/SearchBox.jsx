import TextField from '@mui/material/TextField';
import "../../public/css/SearchBox.css";
import { useState } from 'react';
import getWeatherData from './getWeatherData';
import CircularIndeterminate from './Loader';

function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleForm = async (event) => {
        event.preventDefault();
        setLoading(true);  // Start loading

        try {
            let newInfo = await getWeatherData(city);
            updateInfo(newInfo[0], newInfo[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        setLoading(false);  // Stop loading
        setCity("");  // Clear input field
    };

    return (
        <>
            <div className='SearchBox'>
                <form onSubmit={handleForm}>
                    <TextField 
                        id="searchInput" 
                        color='white' 
                        size='small'  
                        InputProps={{
                            style: { 
                                borderRadius: '50px', 
                                backgroundColor: "white", 
                                border: "none", 
                                padding: "5px" 
                            } 
                        }} 
                        required 
                        onChange={handleCity} 
                        label="Enter City Name" 
                        variant="outlined" 
                        value={city}
                    />
                    <button type='submit' disabled={loading}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                
                {/* Show Loader when fetching data */}
                <div>
                {loading ? <CircularIndeterminate /> : null}
                </div>
            </div>
        </>
    );
}

export default SearchBox;
