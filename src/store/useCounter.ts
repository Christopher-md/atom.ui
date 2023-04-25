import { create } from "zustand";

interface IState {
    count: number;
}

interface IActions {
    increment: () => void;
    decrement: () => void;
}

type IStore = IState & IActions;

const initialState: IState = {
    count: 0,
};

const useCounter = create<IStore>((set) => ({
    ...initialState,
    increment: () => set((state) => ({
        ...state,
        count: state.count + 1,
    })),
    decrement: () => set((state) => ({
        ...state,
        count: state.count - 1,
    })),
}));

export default useCounter;
