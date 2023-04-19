/**
 * Created by chaikovskiy on 19.04.2023
 */
import React, {useEffect, useState} from 'react';
import getCurrentDateTime from '@/utils/getCurrentDateTime';
import styles from './DateTime.module.sass';

interface Props {
    locale?: string
    format?: Intl.DateTimeFormatOptions
}

const DateTime: React.FC<Props> = (props) => {
    const {format, locale} = props;

    const [time, setTime] = useState<string>(getCurrentDateTime({
        locale: locale,
        format: format
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            const time = getCurrentDateTime({
                locale: locale,
                format: format
            });

            setTime(time);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [format, locale]);

    return (
        <span className={styles['date-and-time']}>
            {time}
        </span>
    );
};

export default DateTime;
