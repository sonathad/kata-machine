export default function two_crystal_balls(breaks: boolean[]): number {
    // assuming the array is big enough to have a square root
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) break;
    }

    i -= jmpAmount;
    for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
