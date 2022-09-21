import {useEffect, useState} from "react"
export const useWindowSize = () => {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const captureSize = window.innerHeight;
        setHeight(captureSize);
    },[]);
    return {height}
}


