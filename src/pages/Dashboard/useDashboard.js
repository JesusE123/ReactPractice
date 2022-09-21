import { Http } from "../../utilities/Http"
import { useState, useEffect } from "react"

const useDashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Http.get('/dashboard').then(res => {
            console.log(res.data)
            setData(res.data)
            setLoading(false)
            
        })

    }, [])
  return {data, loading}
}
export  { useDashboard }