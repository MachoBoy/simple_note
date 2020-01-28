const initialState = {
  notes: [
    {
      id: "1234",
      title: "title 1",
      content: "content 1"
    },
    {
      id: "5678",
      title: "title 2",
      content: "content 2"
    },
    {
      id: "9101112",
      title: "title 3",
      content: "content 3"
    }
  ],
  activeId: null,
  text: ""
};

// action type
export const SET_ACTIVE_ID = "note/SET_ACTIVE_ID";
export const EDIT_NOTE = "note/EDIT_NOTE";

// action
export const setActiveID = activeId => ({ type: SET_ACTIVE_ID, activeId });

export const editNote = value => ({
  type: EDIT_NOTE,
  value
});
// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ID:
      return { ...state, activeId: action.activeId };
    case EDIT_NOTE:
      const notes = [...state.notes];
      const note = notes.filter(item => item.id === state.activeId);
      console.log(note);
      return { ...state, text: action.value };

    default:
      return state;
  }
}
