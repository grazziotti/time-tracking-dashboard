type timeframesValueType = {
    current: number;
    previous: number;
}

export type timeframesType = {
    daily: timeframesValueType;
    weekly: timeframesValueType;
    monthly: timeframesValueType;
}