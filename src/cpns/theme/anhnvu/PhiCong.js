import classNames from 'classnames/bind';
import styles from './PhiCong.module.scss';

import Chuot from './Chuot'
import Meme from './Meme'


const cx = classNames.bind(styles);


function PhiCong({active}) {
    

    return ( <div className={cx('wrappercc')}>
        {active ? <Chuot/> : ''}
        <Meme active={active} />
    </div> );
}

export default PhiCong;