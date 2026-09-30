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
                {profile.github} <br />
                {profile.linkedin}
            </p>
        </div>
    )
}
export default ProfilePopup
