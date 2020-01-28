import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as NoteActions from "../../module/Note";
import ListItem from "../ListItem/ListItem";

const List = props => {
  const { setActiveID } = props.actions;

  return (
    <ListWrapper>
      {props.notes.map(note => {
        const { id, title, content } = note;
        return (
          <ListItem
            key={id}
            id={id}
            title={title}
            content={content}
            onClick={() => setActiveID(id)}
          />
        );
      })}
      <ListItem />
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  min-width: 360px;
  width: 360px;
  height: 100%;
  border-right: 1px solid #eee;
`;

const mapStateToProps = state => ({ notes: state.Note.notes });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
