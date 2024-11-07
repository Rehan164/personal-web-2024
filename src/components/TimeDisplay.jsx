import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        setCurrentTime(new Date());
    }, []);

    const formatTime = (date) => {
        if (!date) return '';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${day} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds}`;
};

return (
    <div>
        Last Login: {currentTime ? formatTime(currentTime) : 'Loading...'}
    </div>
  );
};

export default TimeDisplay;
