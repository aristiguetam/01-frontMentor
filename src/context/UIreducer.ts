import { UIState } from './';

type UIActionType =
    | { type: '[UI] - toogleMenu' }


export const UIReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
       case '[UI] - toogleMenu':
          return {
             ...state,
             OpenMenu: !state.OpenMenu
              }

           default:
             return state;
    }

}