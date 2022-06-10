import styled from "styled-components";

export const DropdownWrap = styled.div`
  padding: 8px 10px;
  border: 1px solid #8692a6;
  border-radius: 6px;
  img {
    margin: 0;
  }
  max-height: 200px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const DropdownListContainer = styled.ul`
  margin: 0;
  padding: 0;
  maxheight: 100px;
`;

export const DropdownListItems = styled.li`
  list-style: none;
  margin: 0;
  padding: 2px 0;
  cursor: pointer;
`;
