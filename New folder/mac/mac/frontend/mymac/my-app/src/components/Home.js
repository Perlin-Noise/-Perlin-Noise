import React from 'react';
const Home = () => {
    return (
            <form >
                    <input type="text" name = 'city' placeholder = "city" />
                    <input type="text" name = 'country' placeholder = "country"  /> 
                    
                    <button>get data</button>
            </form>
    );
}
export default Home;