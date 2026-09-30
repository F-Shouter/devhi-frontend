import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import ProfilePopup from "../components/ProfilePopup"

function MapPage () {

    const [profiles, setProfiles] = useState([])
    console.log(profiles)
    
    useEffect(() => {
        fetch('http://localhost:8080/profiles')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProfiles(data)
        })
    }, [])

    return (
        <MapContainer 
            center={[-14.235, -51.9253]}
            zoom={4}
            style={{
                height: '110vh', 
                width: '100%'
            }}
        >
        <TileLayer 
            attribution="&copy; OpenstreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {profiles.map(profile => (
            <Marker
                key={profile.id}
                position={[profile.latitude, profile.longitude]}
            >
                <Popup>
                    <ProfilePopup profile={profile} />
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    )
}
export default MapPage