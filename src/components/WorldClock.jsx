import React, { useEffect, useState } from 'react'

const WorldClock = () => {
    const cities = [
        { name: "Eastern", timeZone: "America/New_York" },
        { name: "Central", timeZone: "America/Chicago" },
        { name: "Mountain", timeZone: "America/Denver" },
        { name: "Pacific", timeZone: "America/Los_Angeles" },
        { name: "Hawaii", timeZone: "Pacific/Honolulu" },
        { name: "Sydney", timeZone: "Australia/Sydney" },
        { name: "Tokyo", timeZone: "Asia/Tokyo" },
        { name: "Mumbai", timeZone: "Asia/Kolkata" },
        { name: "Paris", timeZone: "Europe/Paris" },
        { name: "London", timeZone: "Europe/London" },
        ];
    
        const [times, setTimes] = useState({});
    
        useEffect(() => {
            const updateTimes = () => {
                const newTimes = {};
                cities.forEach((city) => {
                    newTimes[city.name] = new Date().toLocaleDateString("en-US", {
                        timeZone: city.timeZone,
                        hour: "2-digit",
                        minute: "2-digit",
                        // second: "2-digit",
                    });
                });
                setTimes(newTimes);
            };
            updateTimes();
            const interval = setInterval(updateTimes, 1000);
            return () => clearInterval(interval);
        }, []);
  return (
    <div className='flex flex-col items-center m-2 p-2'>
        {/* <h2 className='text-2xl font-bold'>World Clock</h2> */}
        {/* styles-clockContainer */}
        <div className='grid grid-cols-3 gap-3'>
            {cities.map((city) => (
                // styles-cityCard
                <div key={city.name} className='border border-gray-500 p-2 rounded'>
                    {/* styles-cityName */}
                    <div className='font-bold'>{city.name}</div>
                    {/* styles-cityTime */}
                    <div className=''>{times[city.name]}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WorldClock