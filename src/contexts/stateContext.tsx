import { createContext, useReducer, useContext, ReactNode } from 'react';

// Define the shape of our state
interface State {
  state: boolean;
  history: boolean[];
}

// Define action types
type Action = 
  | { type: 'SET_STATE'; payload: boolean }
  | { type: 'REVERT_STATE' };

// Define the initial state
const initialState: State = {
  state: false,
  history: []
};

// Create context
const StateContext = createContext<{
  state: boolean;
  setState: (newState: boolean) => void;
  revertState: () => void;
} | undefined>(undefined);

// Define reducer
const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        history: [...state.history, state.state],
        state: action.payload
      };
    case 'REVERT_STATE':
      const previousState = state.history.pop();
      return {
        ...state,
        state: previousState !== undefined ? previousState : state.state,
        history: [...state.history]
      };
    default:
      return state;
  }
};

// Context provider component
export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setState = (newState: boolean) => {
    dispatch({ type: 'SET_STATE', payload: newState });
  };

  const revertState = () => {
    dispatch({ type: 'REVERT_STATE' });
  };

  return (
<StateContext.Provider value={{ state: state.state, setState, revertState }}>
  {children}
</StateContext.Provider>
  );
};

// Custom hook to use state context
export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return context;
};
