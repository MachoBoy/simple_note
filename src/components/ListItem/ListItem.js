import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import * as NoteActions from "../../module/Note";
import { connect } from "react-redux";

const ListItem = props => {
  const { deleteNote } = props.actions;
  const { activeId, title, id, onClick } = props;
  return (
    <ListItemWrapper onClick={onClick} activeId={activeId} id={id}>
      <Title>{title ? title : "Title"}</Title>
      <Button onClick={() => deleteNote(id)}>-</Button>
    </ListItemWrapper>
  );
};

const ListItemWrapper = styled.div`
  position: relative;
  padding: 20px 30px;
  cursor: pointer;
  background-color: ${props =>
    props.activeId === props.id ? "#f5f5f5" : "fff"};
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;

const mapStateToProps = state => ({ activeId: state.Note.activeId });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
