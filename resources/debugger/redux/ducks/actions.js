import { ADD_ACTION } from '../../../../shared-actions'

const CLEAR_ACTIONS = 'actions/CLEAR_ACTIONS'

const initialState = {
  actions: [],
  clearTs: Date.now(),
}

const handlers = {}

export const addAction = ({ name, context }) => ({
  type: ADD_ACTION,
  payload: {
    name,
    context,
  },
})

handlers[ADD_ACTION] = (state, { payload }) => ({
  ...state,
  actions: state.actions.concat({
    name: payload.name,
    context: payload.context,
    ts: Date.now(),
  }),
})

export const clearActions = () => ({
  type: CLEAR_ACTIONS,
})

handlers[CLEAR_ACTIONS] = state => ({
  ...state,
  actions: [],
  clearTs: Date.now(),
})

export default function(state = initialState, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state, action)
  }

  return state
}
