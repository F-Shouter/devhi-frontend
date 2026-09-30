import { useState } from "react"
import "../styles/CreateProfilePage.css"
function CreateProfilePage() {

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [bio, setBio] = useState("")
    const [city, setCity] = useState("")
    const [githubURL, setGithubURL] = useState("")
    const [linkedinURL, setLinkedinURL] = useState("")
    const [technologies, setTechnologies] = useState("")

    const handleSubmit = async () => {
        const profile = {
            id: Date.now(),
            name,
            avatar,
            bio,
            city,
            githubURL,
            linkedinURL,
            technologies: technologies
                                    .split(",")
                                    .map(item => item.trim()),
            latitude: -23.55052,
            longitude: -46.633308
        }

        const response = await fetch(
            "http://localhost:8080/profiles",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(profile)
            }
        )
        if(response.ok) {
            alert("Perfil criado com SUCESSO ! ! !")
        }

        console.log(response)
    }

    return (
        <div className="create-profile-container">
            <div className="create-profile-card">
                <h1>Criar Perfil</h1>
                <input 
                    type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Avatar"
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}

                />
                <textarea
                    type="text" 
                    placeholder="Biografia"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                />
                <input
                    type="text" 
                    placeholder="Cidade"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />

                <input
                    type="text" 
                    placeholder="URL Perfil para Github"
                    value={githubURL}
                    onChange={(event) => setGithubURL(event.target.value)}
                />
                <input
                    type="text" 
                    placeholder="URL Perfil para Linkedin"
                    value={linkedinURL}
                    onChange={(event) => setLinkedinURL(event.target.value)}
                />
                <input
                    type="text" 
                    placeholder="Quais technologias usa?"
                    value={technologies}
                    onChange={(event) => setTechnologies(event.target.value)}
                />
                <button onClick={handleSubmit}>Cadastrar</button>
            </div>
        </div>
    )
}
export default CreateProfilePage