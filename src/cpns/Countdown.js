import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Countdown.module.scss';

const cx = classNames.bind(styles);

function Countdown() {
    return ( <div className={cx('wrapper')}>
                <div className={cx('count-down-box')}>
                    <span>{CountdownArray()[0]}</span>
                    <span>{CountdownArray()[1]}</span>
                    <span>{CountdownArray()[2]}</span>
                    <span>{CountdownArray()[3]}</span>
                </div>
                <div className={cx('phude')}>
                    <span>Ngày</span>
                    <span>Giờ</span>
                    <span>Phút</span>
                    <span>Giây</span>
                </div>
            </div> );
}

function CountdownArray() {
    const tet = new Date("2023-01-22").getTime() - (7*60*60*1000)
    const [count, setCount] = useState(
        tet - new Date().getTime()
    )
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(tet - new Date().getTime())
        },1000)

        return ()=>{clearInterval(interval)}
    },[tet])
    return getReturnValues(count)
}


const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24) )
    const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((countDown / 1000 / 60) % 60)
    const seconds = Math.floor((countDown / 1000) % 60)
    return [ days, hours, minutes, seconds];
};

export default Countdown;