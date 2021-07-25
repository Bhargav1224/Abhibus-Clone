import styled from "styled-components";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 64% 33%;
  gap: 2%;
  width: 90%;
  margin: auto;
  padding: 10px;
  background-color: #dcdcdc;
`;
export const SeatBook = styled.div`
  padding: 20px;
`;
export const SeatDetails = styled.div`
  padding: 20px;
`;
export const SeatSelect = styled.div`
  border: 0.5px dotted black;
  padding: 20px;
`;
export const LadiesSeat = styled.div`
  display: grid;
  grid-template-columns: 10% 88%;
  gap: 1%;
`;
export const NotesIcon = styled(SpeakerNotesIcon)`
  margin-left: 40%;
  margin-top: 50%;
`;
export const Upper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px;
  width: 85%;
  background-color: white;
`;
export const Lower = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px;
  width: 85%;
  background-color: white;
`;
export const UpperDiv = styled.div`
  display: grid;
  grid-template-columns: 5% 88% 5%;
  gap: 2%;
`;
export const LowerDiv = styled.div`
  display: grid;
  grid-template-columns: 5% 88% 5%;
  gap: 2%;
`;
export const Front = styled.div`
  transform: rotate(270deg);
  color: black;
  font-size: 15px;
  margin-left: 70px;
  margin-top: 30px;
  width: 20px;
`;
export const Rear = styled.div`
  transform: rotate(270deg);
  color: black;
  font-size: 15px;
  margin-left: 100%;
  padding-left: 25px;
  margin-top: 30px;
  width: 20px;
`;
export const EachSeat = styled.div`
  border: 1px solid black;
  height: 24px;
  width: 50px;
  cursor: pointer;
  margin-bottom: 5px;
`;
export const Small = styled.div`
  border: 1px solid black;
  width: 10px;
  height: 15px;
  margin: 4px;
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;
  margin-top: 30px;
`;
export const Ava = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  background-color: white;
`;
export const Unava = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;

  background-color: grey;
`;
export const ForLad = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  margin-right: 5px;
`;
export const Selected = styled.div`
  width: 30px;
  height: 30px;
  background-color: green;
  margin-right: 5px;
`;
export const OptFlex = styled.div`
  display: flex;
`;
export const Span = styled.span`
  margin-top: 6px;
`;
export const Jour = styled.div`
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const JourCity = styled.div`
  font-size: 13px;
  color: #404040;
`;
export const SeatTaken = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #404040;
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export const Button = styled.button`
  color: #404040;
  background-color: hotpink;
  border: none;
  padding: 5px 7px;
  font-size:16px;
  border-radius: 5px;
  cursor: pointer;
  &:disabled{
background-color:#C0C0C0;
  }
`;
