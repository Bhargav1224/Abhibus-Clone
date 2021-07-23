import React from 'react'
import {GridCov,MainCov,Person,CovHeadline,SumCov} from "./Home.styled.js";

export function Covid() {
    return (
        <GridCov>
            <MainCov>
                <CovHeadline>COVID-19 Related Travel Advisory</CovHeadline>
                <SumCov>AbhiBus recommends that every passenger must follow the Covid Safety Guidelines to ensure a safe and comfortable travel experience during bus journeys. Strict safety protocol can ensure that we end the pandemic soon. Make sure you wear a double mask, use hand sanitiser and maintain strict social distancing while travelling. And yes, look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are handpicked, validated bus operators who follow the Covid safety protocols to ensure the safety of you and your family.</SumCov>
                <SumCov>Our travel updates summarize changes reported by various sources on bus and train transportation services. Consider this information as a guide only and please refer to the State-wise COVID-19 Travel Guidelines in India links for further information on travel restrictions and news updates.</SumCov>
                <SumCov>Follow 6 simple steps to protect yourself during Bus travel</SumCov>
                <div><img src="https://static.abhibus.com/img/homepage/covid-precausion.png" alt="covid"/></div>
            </MainCov>
            <Person>
                <img src="https://static.abhibus.com/img/homepage/home-2.png" />
            </Person>
        </GridCov>
    )
}
