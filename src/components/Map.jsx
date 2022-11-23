import React from "react"
import {GoogleMap,LoadScript,Marker} from "@react-google-maps/api"

const Map=({data})=>{
    const mapStyles={
        height:"50vh",
        width:"100%"
    }
    const defaultCenter={
        lat: data.lat, lng: data.lng
    }

    return(
        <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw">
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={9}
            center={defaultCenter}
            >
                <Marker/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
