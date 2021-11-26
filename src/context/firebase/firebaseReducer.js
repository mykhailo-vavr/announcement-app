const handlers = {
  CREATE: (state, { payload }) => ({
    ...state,
    announcements: [...state.announcements, payload]
  }),
  FETCH: (state, { payload }) => ({
    ...state,
    announcements: payload
  }),
  REMOVE: (state, { payload }) => ({
    ...state,
    announcements: state.announcements.filter(
      item => item.id !== payload
    )
  }),
  UPDATE: (state, { payload }) => ({
    ...state,
    announcements: state.announcements.map(item =>
      item.id === payload.id ? payload : item
    )
  }),
  DEFAULT: state => state
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
