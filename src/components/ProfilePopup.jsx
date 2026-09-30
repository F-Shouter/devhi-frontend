function ProfilePopup ({profile}) {
    return (
        <div>
            <h3>
                {profile.avatar} {profile.name} - {profile.city}
            </h3> <hr />
            <p>
                {profile.bio} <br />
                Tecnologias:
                {profile.technologies.join(", ")}
            </p>
            <p>
                {profile.githubURL} <br />
                {profile.linkedinURL}
            </p>
        </div>
    )
}
export default ProfilePopup
