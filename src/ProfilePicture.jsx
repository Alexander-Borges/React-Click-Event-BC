
function ProfilePicture() {

    const imageUrl = "./src/assets/dtla.jpg";

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onDoubleClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture