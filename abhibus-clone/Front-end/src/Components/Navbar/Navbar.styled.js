import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #efefef;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: #444444;
  font-size: 16 px;
  font-weight: 500;
`;
export const Img = styled.img`
  height: 55px;
`;
export const NavLinks = styled.div`
  display: flex;
  width: 40%;
  padding-right: 5%;
  margin-top: 20px;
  justify-content: space-evenly;
`;
export const BookDiv = styled.div`
  display: flex;
  cursor: pointer;
`;
export const BookingOptions = styled.ul`
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  padding: 15px 20px;
  margin-top: 30px;
  margin-left: 2%;
  z-index: 100000000;
  width: 7%;
  position: absolute;
`;
export const BookingList = styled.div`
padding: 10px;
display: flex;
`
