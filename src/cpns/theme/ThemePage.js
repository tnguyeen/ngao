import {  useState, useRef } from 'react';

import PhiCong from './anhnvu/PhiCong'

import classNames from 'classnames/bind';
import styles from './ThemePage.module.scss';

import Lop from './lop.JPG'
import Video from './anhnvu/video.mp4'
import Maybay from './anhnvu/4.png'
import lalala from './lalala.mp3'

const cx = classNames.bind(styles);

function ThemePage() {
    const [theme, setTheme] = useState(false)
    const Lala = useRef(new Audio(lalala))

    const buttonHandle = () => {
        setTheme(theme ? false : true )
        !theme ? Lala.current.play() : Lala.current.pause()
    }

    return ( <div className={cx('wrapper')}>
        <img src={Maybay} onClick={buttonHandle} className={cx('switch-theme')}/>
        {theme && <div className={cx('phoa')} ></div>}
        <div className={cx('back-ground-theme')}>
            {theme ? <video autoPlay muted loop >
                <source src={Video} />
            </video> : <img src={Lop}/>}
        </div>
        <PhiCong  active={theme} />
    </div> );
}

export default ThemePage;