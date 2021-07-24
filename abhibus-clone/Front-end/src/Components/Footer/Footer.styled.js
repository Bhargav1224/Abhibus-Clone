import styled from "styled-components";

export const Circle = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;
export const FlexDiv = styled.div`
  width: 33%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem !important;
`;
export const Social = styled.div`
  font-size: 20px;
`;
export const FootCont = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  padding: 20px 10px;
`;
export const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5%;
`;
export const Head1 = styled.div`
  font-size: 15px !important;
  color: #212529;
  font-weight: 600;
  margin-left: 20px;
`;
export const Li = styled.li`
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 5px;
  color: #212529;
  &:hover{
      color: red;
  }
`;
export const FlexCont2 = styled.div`
display: flex;
justify-content:space-evenly;
width:80%;
margin: auto;
font-size:14px;
margin-bottom: 10px;

`
export const FlexCont3 = styled.div`
display: flex;
justify-content:space-between;
width:20%;
text-align:right;
margin-left: 66%;
font-size:14px;
`
export const FootCont2 = styled.div`
    background: #f0f0f0;
    border-top: 1px solid #dee2e6!important;
    width: 100%;
    padding: 10px;
`
