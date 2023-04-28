export const REGEX_INT = /\d+/g;

export function parseDigits(string: string): string {
    return ((string ?? "").match(REGEX_INT) ?? []).join("");
}
