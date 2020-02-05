const initialState = {
  notes: [],
  activeId: null
};

// action type
export const SET_ACTIVE_ID = "note/SET_ACTIVE_ID";
export const EDIT_NOTE = "note/EDIT_NOTE";
export const ADD_NOTE = "note/ADD_NOTE";
export const DELETE_NOTE = "note/DELETE_NOTE";

// action
export const setActiveID = activeId => ({ type: SET_ACTIVE_ID, activeId });
export const editNote = (key, value) => ({
  type: EDIT_NOTE,
  key,
  value
});
export const addNote = () => ({ type: ADD_NOTE });
export const deleteNote = () => ({ type: DELETE_NOTE });

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ID:
      return { ...state, activeId: action.activeId };
    case EDIT_NOTE:
      const updatedResult = state.notes.map(note => {
        if (note.id === state.activeId) {
          return { ...note, [action.key]: action.value };
        } else {
          return note;
        }
      });
      return { ...state, notes: updatedResult };
    case ADD_NOTE:
      const generateId = Math.random()
        .toString(36)
        .substr(2, 9);
      let note = {
        id: generateId,
        title: "",
        content: ""
      };
      console.log(state.notes);
      return { ...state, notes: [...state.notes, note] };
    case DELETE_NOTE:
      const deleteResult = state.notes.filter(
        note => note.id !== state.activeId
      );
      return {
        ...state,
        notes: deleteResult
      };
    default:
      return state;
  }
}
