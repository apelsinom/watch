import React, {useState} from 'react';
import s from './WatchAnalog.module.css'
import Color from './images/watchColor.png'
import Incline from './images/watchIncline.png'
import Kids from './images/watchKids.png'
import Roman from './images/watchRoman.png'
import Yellow from './images/watchYellow.png'
import Black from './images/watchBlack.png'

type Props = {
    date: Date
}
const watchView = [
    Black, Color, Incline, Kids, Roman, Yellow
]
export const WatchAnalog = ({date}: Props) => {
    const [indexWatchView, setIndexWatchView] = useState(0)

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourRotation = (hours * 30) + (minutes / 2);
    const minuteRotation = (minutes * 6) + (seconds / 10);
    const secondRotation = seconds * 6;

    const changeWatchHandler = () => {
        if (indexWatchView===watchView.length-1) {
            setIndexWatchView(0)
        } else {
            setIndexWatchView(indexWatchView+1)
        }
    }

    return (
        <>
            <div className={s.clock} style={{background: `url(${watchView[indexWatchView]}) center / cover`}}>
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
            <h1 className={s.click} onClick={changeWatchHandler}>Click for change watch face</h1>
        </>
    );
};
