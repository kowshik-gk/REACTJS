import React from 'react'
import { useState, useEffect } from 'react'

const useWindowSize=()=> {
    const [WindowSize, handleResize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const rSize = () => {
            handleResize({
                width: window.innerWidth,
                height: window.innerHeight
            })
            rSize();
            window.addEventListener("resize",rSize);
        }

        return ()=>{window.removeEventListener("resize",rSize);} // here the return statement used to avoid the event call while this component unmounted after mounting
        //else the event call occurs after unmounting this component


    },[])
    return WindowSize
}

export default useWindowSize