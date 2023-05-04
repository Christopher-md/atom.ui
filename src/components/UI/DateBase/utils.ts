import isLeapYear from "@/utils/isLeapYear";

type Options = {
    hyphen: string;
    yearMax: string;
    yearMin: string;
};

export const monthLength = {
    "01": "31",
    "02": "28",
    "03": "31",
    "04": "30",
    "05": "31",
    "06": "30",
    "07": "31",
    "08": "31",
    "09": "30",
    10: "31",
    11: "30",
    12: "31",
};

const concatHyphenBefore = (value: string, hyphen: string): string => (value.length !== 0 ? `${hyphen}${value}` : "");

function limit(value: string, max: string, min = "01", length = 2): string {
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

const maxDayOfMonth = (month: string, year: string, yearMin: string): string => {
    if (!(month.length === 2 && year.length === (yearMin.length || 4))) return "31";

    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10);
    const yearMinInt = parseInt(yearMin, 10);

    if (yearInt > yearMinInt && isLeapYear(yearInt) && monthInt === 2) {
        return "29";
    }

    return monthLength[month as keyof typeof monthLength];
};

export const validDate = (string: string, { hyphen, yearMax, yearMin }: Options): string => {
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
