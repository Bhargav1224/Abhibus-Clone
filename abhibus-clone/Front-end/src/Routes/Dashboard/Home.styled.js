import styled from "styled-components"
import {Link} from "react-router-dom"


export const BusBook = styled.div`
text-align: center;
width:85%;
margin: auto;
margin-top: 40px;
position: relative;

`
export const Heading = styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 1.5rem!important;
`
export const TravelOptions = styled.div`
display: flex;
width:30%;
margin: auto;
justify-content:space-between;
margin-bottom: 1.5rem!important;
`

export const Opts = styled(Link)`
color:black;
text-decoration: none;
padding:6px 10px;
border-radius: 10px;
font-size:19px;
&:focus{
    background-color:#c60001;
    color:white;
}
`
export const ImgChange = styled.img`
left: 27.7%;
top:70.5%;
position : absolute;
width:30px;
`
export const BusImg = styled.img`
height:230px;
width:100vw;
`
export const ImgCar = styled.img`
width:90%;
height: 150px;
cursor: pointer;
`
export const OffersDiv = styled.div`
width:80%;
margin: 10px 10%;
border: 2px solid #efefef;
padding: 10px;
`

export const SumLines = styled.div`
display :flex ;
justify-content: space-between;
font-size: 20px;
font-weight:500;
`
export const OffersView = styled.div`
display :flex;
justify-content: space-between;
width:25%;

`
export const HeadingOffers = styled.div`
font-size: 26px;
font-weight:500;
margin-bottom: 20px;
`
export const ImgAg = styled.img`
width:70%;
height:110px;
`
export const ImgBan = styled.img`
width:100%;
`
export const BannerDiv = styled.div`
width:85%;
margin: auto;
`
export const GridCov = styled.div`
display :grid;
grid-template-columns: 65% 32%;
gap: 1%;
width:80%;
margin: auto;
border: 2px solid #efefef;
padding: 1rem;
margin-bottom: 1.5rem!important;
`
export const CovHeadline = styled.div`
font-size:22px;
font-weight: 600;
margin-bottom: 1.5rem!important;
`
export const MainCov = styled.div`
font-size:18px;
text-align: justify;
`
export const SumCov = styled.div`
margin-bottom:1rem!important;
font-size:16px;
text-align:justify;
color: #444444;
`
export const ListData = styled.li`
margin-bottom:0.5rem!important;
font-size:16px;
text-align:justify;
color: #444444;
`
export const Person = styled.div`

`
export const DataCont = styled.div`
width:80%;
margin: auto;
border: 2px solid #efefef;
padding: 1rem;
margin-bottom: 1.5rem!important;
`
export const MainHead = styled.div`
font-size:26px;
font-weight:500;
padding-bottom: 1rem!important;
`
export const QHead = styled.div`
font-size:17px;
font-weight: 600;
`
export const StoreCont = styled.div`
display: grid;
grid-template-columns: 32% 66%;
gap: 2%;
width:80%;
margin: auto;
border: 2px solid #efefef;
padding: 1rem;
margin-bottom: 1.5rem!important;
`
export const GridApp = styled.div`
display: grid;
grid-template-columns:repeat(2,1fr);
`
export const RedLine = styled.div`
width:10px;
height:60px;
background-color:#c60001;
`

export const FlexData = styled.div`
display: flex;
justify-content: space-between;
width: 85%;
margin-bottom: 1.7rem!important;
`
export const HeadDt = styled.div`
font-size:20px;
font-weight: 600;
`
export const Ans = styled.div`
width: 70%;
font-size:17px ;
text-align: justify;
`