'use client';
import { day } from '@/constants';
import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

export default function Clock() {
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentHours, setCurrentHours] = useState(new Date().getHours());
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const newMinute = now.getMinutes();
      if (newMinute !== currentMinute) {
        setCurrentMinute(newMinute);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMinute]);

  return (
    <div className="flex flex-row clock mt-[25px]">
      <FlipMove typeName="div" enterAnimation="accordionVertical">
        <div
          key={currentHours}
          className="w-32 h-52 flex-center bg-primary-500 border-r border-slate-300/10 text-6xl"
        >
          {currentHours}
        </div>
      </FlipMove>
      <FlipMove typeName="div" enterAnimation="accordionVertical">
        <div
          key={currentMinute}
          className="w-32 h-52 flex-center bg-primary-500 border-r border-slate-300/10 text-6xl"
        >
          {currentMinute <= 9 ? `0${currentMinute}` : currentMinute}
          <span className="absolute bottom-1 right-2 text-small">
            {day[currentDay]}
          </span>
        </div>
      </FlipMove>
    </div>
  );
}
