import React, { useEffect, useState } from 'react';

const TodoDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // clean up
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="datetime-banner">
      <span>📅 {formattedDate}</span>
      <span>⏰ {formattedTime}</span>
    </div>
  );
};

export default TodoDateTime;
