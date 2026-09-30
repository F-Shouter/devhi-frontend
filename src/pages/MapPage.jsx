import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const profiles = [
    {
        id: 1,
        name: "Anne",
        avatar: "🤡",
        city: "São Paulo",
        latitude: -23.55052,
        longitude: -46.633308
    },
    {
        id: 2,
        name: "João",
        avatar: "🤖",
        city: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729
    },
    {
        id: 3,
        name: "Maria",
        avatar: "☕",
        city: "Curitiba",
        latitude: -25.4284,
        longitude: -49.2733
    }
]
function MapPage () {
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
                    {profile.avatar}{profile.name}
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    )
}
export default MapPage