import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const profiles = [
    {
        id: 1,
        name: "Anne",
        avatar: "🤡",
        bio: "Estudando Programação",
        city: "São Paulo",
        github: "github.com/anne",
        linkedin: "linkedin.com/in/anne",
        technologies: ["Java", "AWS", "React"],
        latitude: -23.55052,
        longitude: -46.633308
    },
    {
        id: 2,
        name: "João",
        avatar: "🤖",
        bio: "Sendo PO, Analista Funcional!",
        city: "Rio de Janeiro",
        github: "github.com/joao",
        linkedin: "linkedin.com/in/joao",
        technologies: ["Scrum Master", "Jira"],
        latitude: -22.9068,
        longitude: -43.1729
    },
    {
        id: 3,
        name: "Maria",
        avatar: "☕",
        bio: "Desenvolvedor Backend",
        city: "Curitiba",
        github: "github.com/maria",
        linkedin: "linkedin.com/in/maria",
        technologies: ["Spring Boot", "Java"],
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
                    <div>
                        <h3>
                            {profile.avatar} {profile.name} - {profile.city}
                        </h3>
                        <p>{profile.bio} <br />
                        Tecnologias:
                            {profile.technologies.join(", ")}
                        </p>
                        <p>{profile.github} <br /> {profile.linkedin}</p>
                    </div>
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    )
}
export default MapPage