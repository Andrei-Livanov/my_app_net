import {getAuthUserData} from './auth-reducer'
import {InferActionsTypes} from './redux-store'

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'AN/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer
