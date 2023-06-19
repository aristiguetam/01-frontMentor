import { createContext } from 'react';

interface ContextProps {
    OpenMenu: boolean;
    toggleMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);