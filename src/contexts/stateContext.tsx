import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  ChangeEvent,
} from 'react';

// Define the shape of our state
interface FormValues {
  name: string;
  address: string;
  officePhone: string;
  contactPerson: string;
  mobilePhone: string;
  status: string[];
  status2: string[];
  createdBy: number;
  updatedBy: number;
  statusx: string;
  agreed: boolean;
}

interface State {
  formValues: any;
  tableData: any[];
  history: { formValues: any; tableData: any[] }[];
}

// Define initial form values
const initialFormValues: any = {
  name: '',
  address: '',
  officePhone: '',
  contactPerson: '',
  mobilePhone: '',
  status: [],
  status2: [],
  createdBy: 1,
  updatedBy: 1,
  statusx: 'Inactive',
  agreed: false,
};

// Define the initial state
const initialState: State = {
  formValues: initialFormValues,
  tableData: [],
  history: [],
};

// Define action types
type Action =
  | { type: 'SET_FORM_VALUES'; payload: Partial<any> }
  | { type: 'REVERT_STATE' }
  | { type: 'ADD_TO_TABLE' };

// Create context
const StateContext = createContext<
  | {
      formValues: any;
      tableData: any[];
      setFormValues: (newValues: Partial<any>) => void;
      revertState: () => void;
      addToTable: () => void;
    }
  | undefined
>(undefined);

// Define reducer
const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FORM_VALUES':
      return {
        ...state,
        history: [
          ...state.history,
          { formValues: state.formValues, tableData: state.tableData },
        ],
        formValues: { ...state.formValues, ...action.payload },
      };
    case 'REVERT_STATE':
      const previousState = state.history.pop();
      return {
        ...state,
        formValues: previousState ? previousState.formValues : state.formValues,
        tableData: previousState ? previousState.tableData : state.tableData,
        history: [...state.history],
      };
    case 'ADD_TO_TABLE':
      return {
        ...state,
        tableData: [...state.tableData, state.formValues],
      };
    default:
      return state;
  }
};

// Context provider component
export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setFormValues = (newValues: Partial<any>) => {
    dispatch({ type: 'SET_FORM_VALUES', payload: newValues });
  };

  const revertState = () => {
    dispatch({ type: 'REVERT_STATE' });
  };

  const addToTable = () => {
    dispatch({ type: 'ADD_TO_TABLE' });
  };

  return (
    <StateContext.Provider
      value={{
        formValues: state.formValues,
        tableData: state.tableData,
        setFormValues,
        revertState,
        addToTable,
      }}
    >
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

// contexts/stateContext.tsx
// import { createContext, useContext, ReactNode, useReducer } from 'react';

// interface State {
//   formValues: any;
//   tableData: any[];
// }

// interface Action {
//   type: string;
//   payload?: any;
// }

// const initialFormValues = {
//   name: '',
//   address: '',
//   officePhone: '',
//   contactPerson: '',
//   mobilePhone: '',
//   status: [],
//   createdBy: 1,
//   updatedBy: 1,
//   statusx: 'Inactive',
//   agreed: false,
// };

// const initialState: State = {
//   formValues: initialFormValues,
//   tableData: [],
// };

// const StateContext = createContext<
//   { state: State; dispatch: React.Dispatch<Action> } | undefined
// >(undefined);

// const stateReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'SET_FORM_VALUES':
//       return {
//         ...state,
//         formValues: { ...state.formValues, ...action.payload },
//       };
//     case 'REVERT_STATE':
//       return initialState;
//     case 'ADD_TO_TABLE':
//       return {
//         ...state,
//         tableData: [...state.tableData, state.formValues],
//       };
//     default:
//       return state;
//   }
// };

// export const StateProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(stateReducer, initialState);

//   return (
//     <StateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useAppState = () => {
//   const context = useContext(StateContext);

//   if (context === undefined) {
//     throw new Error('useAppState must be used within a StateProvider');
//   }
//   return context;
// };
