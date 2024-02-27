import profilePic from './assets/2.png'
function Card(){

    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="picture" />
            <h2 className='card-title'>Card</h2>
            <p className='card-text'>Card component</p>
        </div>
    );
}

export default Card