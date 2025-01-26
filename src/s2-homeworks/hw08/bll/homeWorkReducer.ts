import {initialPeople, UserType} from '../HW8'
import User from "../User";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) => action.payload === 'up'
                ? (a.name > b.name ? 0 : -1)
                : (a.name < b.name ? 0 : -1)
            )
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
