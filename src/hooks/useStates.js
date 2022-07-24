import { useReducer } from 'react'

const actions = {
  setPage: 'set page',
  setIsNextPage: 'set is next page',
  setLoading: 'set loading',
  setError: 'set error',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setPage:
      return {
        ...state,
        page: state.page + 1,
      }
    case actions.setIsNextPage:
      return {
        ...state,
        isNextPage: action.payload,
      }
    case actions.setLoading:
      return {
        ...state,
        loading: action.payload,
      }
    case actions.setError:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default function useStates() {
  const [state, dispatch] = useReducer(reducer, {
    page: 1,
    isNextPage: true,
    loading: false,
    error: false,
  })

  const { page, isNextPage, loading, error } = state

  return {
    page,
    isNextPage,
    loading,
    error,
    setPage: () => dispatch({ type: actions.setPage }),
    setIsNextPage: (keyword) => dispatch({ type: actions.setIsNextPage, payload: keyword }),
    setLoading: (keyword) => dispatch({ type: actions.setLoading, payload: keyword }),
    setError: (keyword) => dispatch({ type: actions.setError, payload: keyword }),
  }
}
