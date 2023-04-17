export type CounterState = {
    count: number;
};
type CounterResetAct = {
    type: "RESET";
};
type CouInterIncDecAct = {
    type: "INCREMENT" | "DECREMENT";
    payload: number
};

export type Action = 
    | CounterResetAct
    | CouInterIncDecAct