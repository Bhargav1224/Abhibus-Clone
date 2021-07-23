import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const Nav = styled.div`
  width: 100vw;
  background: #efefef;
  border-bottom: 1px solid #ccc;
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const Linked = styled(Link)`
  text-decoration: none;
  color: #444444;
  padding: 0 20px;
  font-size: 16 px;
  font-weight: 500;
`;
export const Img = styled.img`
  height: 55px;
`;
export const NavLinks = styled.div`
  display: flex;
  width: 50%;
  margin-right: 5%;
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
`;
export const User = styled(AccountCircleTwoToneIcon)`
  color: #444444;
  width: 21px;
  padding-right: 4px;
`;
export const ExpandArrow = styled(ArrowDropDownIcon)`
  color: red;
`;
export const FilledCircle = styled(FiberManualRecordIcon)`
  color: red;
  padding-right: 5px;
`;
