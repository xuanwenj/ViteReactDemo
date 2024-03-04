
function ProfilePicture(){
    const imageUrl = './src/assets/2.png';

    const handleClick = (e) => e.target.style.display = "none";

    // onClick ={handleClick} is a callback to handle handleClick event
    return(<img onClick ={(e) => handleClick(e)} src={imageUrl}></img>)
}   
export default ProfilePicture