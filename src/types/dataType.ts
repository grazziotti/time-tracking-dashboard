type timeFrameValue = {
    current: number;
    previous: number;
}

export type dataType = {
    title: string;
    timeframes: {
      daily: timeFrameValue;
      weekly: timeFrameValue;
      monthly: timeFrameValue;
    }
}