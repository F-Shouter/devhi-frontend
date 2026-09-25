import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

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
        <Marker position={[-23.55052, -46.633308]}>
            <Popup>
                 🤡 Anne
            </Popup>
        </Marker>
        </MapContainer>
    )
}
export default MapPage