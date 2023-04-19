import React, {useState} from 'react';
import classNames from 'classnames';
import {DateTime as Luxon} from 'luxon';
import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';
import DateTime from '@/components/DateTime/DateTime'
import styles from './App.module.sass';

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={styles.App}>
            <div>
                <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" rel="noreferrer" target="_blank">
                    <img src={reactLogo} className={classNames(styles.react, styles.logo)} alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={styles.card}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <DateTime
                locale='en'
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
            <p className={styles['read-the-docs']}>
                App is running in {import.meta.env.MODE} mode
                <br/>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App;
