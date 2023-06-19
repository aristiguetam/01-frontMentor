import { useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
    OpenMenu: boolean;
}

export const UI_INITIAL_STATE: UIState = {
    OpenMenu: false,
}

interface Props {
    children: React.ReactNode;
}

export const UIProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const toggleMenu = () => {
        dispatch({ type: '[UI] - toogleMenu' });
    }

    return (
        <UIContext.Provider value={{
            ...state,
            toggleMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}