import {memo, useState} from 'react'
import classNames from 'classnames/bind';
import styles from './PhiCong.module.scss';

import One from './1.png'
import Six from './6.png'
import Qr from './qr.png'

const cx = classNames.bind(styles);

const oneStyle = {
    left: '60%', transitionDuration : '1s'
}
const sixStyle = {
    bottom :'0'
}
const qrStyle = {
    top :'-200px',
    opacity:'1',
    height : '70%'
}

function Meme({active}) {
    const [showQr, setShowQr] = useState(false)

    return ( <div className={cx('wrapper')}>
        <div className={cx('one')} onClick={()=>{setShowQr(showQr ? false : true)}} style={active ? {...oneStyle} : {}} >
            <img src={One} />
            <img className={cx('qr')} src={Qr} style={(showQr&&active) ? {...qrStyle} : {}} />
        </div>
        <div className={cx('six')} style={active ? {...sixStyle} : {}} >
            <img src={Six} />
        </div>
    </div> );
}

export default memo(Meme);