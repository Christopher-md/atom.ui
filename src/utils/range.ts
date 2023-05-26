function range(start: number, length: number) {
    return Array.from({ length }, (_, i) => i + start);
}

export default range;
