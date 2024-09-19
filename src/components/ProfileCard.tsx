type ProfileCardProps = {
    profilePic?: string;
    alt?: string;
    name?: string;
}

const ProfileCard = ({profilePic, alt, name}: ProfileCardProps) => {
    return(
        <>
            <div className="profile-card align-middle justify-center">
                <div className="image relative h-3.5 w-36">
                    <img src="../fotos/kaio.png" alt={alt} className="profile-image h-full w-full" />
                </div>
            </div>

        </>
    )
};

export default ProfileCard;