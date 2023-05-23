import isLeapYear from "@/utils/isLeapYear";
import monthLength from "../constants/monthLength";

type Options = {
    hyphen: string;
    yearMax: string;
    yearMin: string;
};

const concatHyphenBefore = (value: string, hyphen: string) => (value.length !== 0 ? `${hyphen}${value}` : "");

function limit(value: string, max: string, min = "01", length = 2) {
    if (value.length === 1 && value[0] > max[0]) {
        value = `0${value}`;
    }

    if (value.length === length) {
        if (value > max) {
            value = max;
        } else if (value < min) {
            value = min;
        }
    }

    return value;
}

const maxDayOfMonth = (month: string, year: string, yearMin: string) => {
    if (!(month.length === 2 && year.length === (yearMin.length || 4))) return "31";

    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10);
    const yearMinInt = parseInt(yearMin, 10);

    if (yearInt > yearMinInt && isLeapYear(yearInt) && monthInt === 2) {
        return "29";
    }

    return monthLength[month as keyof typeof monthLength];
};

const validDate = (string: string, { hyphen, yearMax, yearMin }: Options) => {
    // get valid month
    const month = limit(string.substring(2, 4), "12");
    // get valid year
    const year = limit(string.substring(4, 8), yearMax, yearMin, 4);
    // get max days by current month
    const maxDays = maxDayOfMonth(month, year, yearMin);
    // get valid date
    const date = limit(string.substring(0, 2), maxDays);

    return (
        date
        + concatHyphenBefore(month, hyphen)
        + concatHyphenBefore(year, hyphen)
    );
};

export default validDate;
