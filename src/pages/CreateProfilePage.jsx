import { useState } from "react"
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

        console.log(profile)
    }

    return (
        <div>
            <h1>Criar Perfil</h1>
            <p>Nome: {name}</p>
            <p>Cidade: {city}</p>

            <input 
                type="text" 
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />

            <input 
                type="text" 
                placeholder="Avatar"
                value={avatar}
                onChange={(event) => setAvatar(event.target.value)}

            />
            <br />

            <input
                type="text" 
                placeholder="Biografia"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
            />
            <br />

            <input
                type="text" 
                placeholder="Cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <br />

            <input
                type="text" 
                placeholder="URL Perfil para Github"
                value={githubURL}
                onChange={(event) => setGithubURL(event.target.value)}
            />
            <br />

            <input
                type="text" 
                placeholder="URL Perfil para Linkedin"
                value={linkedinURL}
                onChange={(event) => setLinkedinURL(event.target.value)}
            />
            <br />

            <input
                type="text" 
                placeholder="Quais technologias usa?"
                value={technologies}
                onChange={(event) => setTechnologies(event.target.value)}
            />
            <br /><br />

            <button onClick={handleSubmit}>Cadastrar</button>

        </div>
    )
}
export default CreateProfilePage