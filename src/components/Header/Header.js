import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import * as NoteActions from "../../module/Note";
import { connect } from "react-redux";

const Header = props => {
  const { addNote } = props.actions;
  return (
    <Wrapper>
      <Title>Jiwon's Simple Note</Title>
      <ButtonWrapper>
        <Button onClick={addNote}>+</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  border: 0px;
  font-size: 30px;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});
export default connect(null, mapDispatchToProps)(Header);
