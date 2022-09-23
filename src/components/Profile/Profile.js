import "./Profile.css";


function Profile() {

const name = "name";

  return (
    <div className= "profile">
      <img alt= "avatar" className= "avatar"></img>
      <button className= "add-avatar">+</button>
      <p className= "name">{name}</p>
    </div>
  );
}

export default Profile;
