import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import * as NoteActions from "../../module/Note";
import { connect } from "react-redux";

const Note = props => {
  const { editNote } = props.actions;
  const { notes, activeId } = props;

  return (
    <NoteWrapper>
      {notes.map(note => {
        const { id, title, content } = note;
        if (id === activeId) {
          return (
            <div key={id}>
              <Title
                type="text"
                placeholder="Title"
                defaultValue={title}
                onChange={e => editNote("title", e.target.value)}
              ></Title>
              <NoteContent
                type="text"
                placeholder="Contents"
                defaultValue={content}
                onChange={e => editNote("content", e.target.value)}
              ></NoteContent>
            </div>
          );
        }
      })}
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  width: 100%;
  padding: 40px 70px 0px 70px;
`;
const Title = styled.input`
  display: block;
  font-size: 24px;
  font-weight: 800;
  font-family: inherit;
  border: 0px;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  width: 100%;
  outline: none;
`;
const NoteContent = styled.textarea`
  display: block;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  border: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100% - 60px);
  outline: none;
  resize: none;
`;

const mapStateToProps = state => ({
  notes: state.Note.notes,
  activeId: state.Note.activeId
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Note);
