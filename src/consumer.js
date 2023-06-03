import React, { useState, useEffect } from 'react';
import './index.css';

function MyComponent() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://storynow.onrender.com/story/');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    
    return (
            <div class="container">
                <h1>Welcome to My Blog</h1>
                {
                    data.map(item => <div >
                    <h2>{item.title}</h2>
                    <p className='preformatted'>{item.story}</p>
                    </div>
                        
                    )
                }
                
            </div>
    )
  }


  export default MyComponent;
  