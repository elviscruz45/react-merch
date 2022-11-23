import axios from "axios"
import {useState,useEffect} from "react"

const useGoogleAddress=address=>{
    const [map,setMap]=useState({})
    const API=`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU9Orw`

    useEffect(async()=>{
        const response=await axios(API)
        setMap(response.data.result[0].geometry.location)
    },[])
    return map


}

export default useGoogleAddress