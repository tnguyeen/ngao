import Countdown from './cpns/Countdown'
import ThemePage from './cpns/theme/ThemePage'

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);


function App() {
  return (
    <div className={cx('App')}>
      <Countdown/>
      <ThemePage/>
    </div>
  );
}

export default App;
