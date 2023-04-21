import { DateTime } from "luxon";

interface Options {
    locale: string
    format: Intl.DateTimeFormatOptions,
}

function getCurrentTime(options: Partial<Options> = {}) {
    const { format = DateTime.DATETIME_MED, locale } = options;

    const now = DateTime.now();

    return now.toLocaleString(format, { locale });
}

export default getCurrentTime;
