import React from "react";
import styled from "styled-components";

const ListItem = ({ id, title, content, onClick }) => {
  return (
    <ListItemWrapper onClick={onClick}>
      <Title>{title ? title : "Title"}</Title>
      <ListItemContent>{content ? content : "Content"}</ListItemContent>
    </ListItemWrapper>
  );
};

const ListItemWrapper = styled.div`
  padding: 20px 30px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ListItemContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export default ListItem;
