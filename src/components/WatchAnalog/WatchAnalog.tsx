import React from 'react';
import s from './WatchAnalog.module.css'

type Props = {
    date: Date
}
export const WatchAnalog = ({date}:Props) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourRotation = (hours * 30) + (minutes / 2);
    const minuteRotation = (minutes * 6) + (seconds / 10);
    const secondRotation = seconds * 6;

    return (
        <div className={s.clock}>
            <div className={s.hour}>
                <div className={s.hours} style={{transform: `rotate(${hourRotation}deg)`}}></div>
            </div>
            <div className={s.minute}>
                <div className={s.minutes} style={{transform: `rotate(${minuteRotation}deg)`}}></div>
            </div>
            <div className={s.second}>
                <div className={s.seconds} style={{transform: `rotate(${secondRotation}deg)`}}></div>
            </div>
        </div>
    );
};
