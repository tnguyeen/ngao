import {useState, useEffect} from 'react'
import classNames from 'classnames/bind';
import styles from './PhiCong.module.scss';

import ChuotV from './chuot.png'

const cx = classNames.bind(styles);


function Chuot() {
    
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)
    const hehe = (e) => {
        const yo = document.getElementById('yo')
        const yo2 = document.getElementById('yo2')

        setx(e.clientX - yo.offsetWidth/2)
        sety(e.clientY - yo.offsetHeight/2)

        yo.animate({transform:`translate(${x}px, ${y}px)`},{
            duration:2000,fill:'forwards'
        })
        yo2.animate({transform:`translate(${x}px, ${y}px)`},{
            duration:500,fill:'forwards'
        })
    }
    useEffect(()=>{
        window.addEventListener('mousemove', hehe)

        return ()=>{window.removeEventListener('mousemove', hehe)}
    })

    return ( <div className={cx('chuot')} id='chuot' >
                <img src={ChuotV} id='yo'/>
                <img src={ChuotV} id='yo2'/>
            </div> );
}

export default Chuot;
