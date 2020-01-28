import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Jiwon's Simple Note</Title>
      <ButtonWrapper>
        <Button>ADD</Button>
        <Button>REMOVE</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  width: 70%;
  font-size: 1.6rem;
  font-weight: 800;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const Button = styled.button`
  width: 50%;
  border: 0px;
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
`;

export default Header;
