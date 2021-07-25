import React from 'react'
import { useState, useEffect } from 'react';

export const Timer = () => {
    // const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(10);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                        clearInterval(myInterval);
                    
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <>
        { minutes === 0 && seconds === 0
            ? null
                : <>{minutes< 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</>
        }
        </>
    )
}
