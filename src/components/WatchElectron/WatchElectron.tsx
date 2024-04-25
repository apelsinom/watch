import React from 'react';
import s from './WatchElectron.module.css'

type Props = {
    date: Date
}
export const WatchElectron = ({date}:Props) => {
    let watch = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    return (
        <div className={s.watch}>
            {watch}
        </div>
    );
};
