const ProfileCard = (props) => {
  return (
    <div>
         <div className="border-2 border-blue-600 py-6 px-6 ">
        <img src={props.image} alt="image" className="w-96 h-80 sm:w-full" />
<h2><span className="font-bold text-blue-400  ">My name :</span> {props.name}</h2>
<p><span className="font-bold text-blue-400  ">Age :</span> {props.age}</p>
<p><span className="font-bold text-blue-400  ">Bio :</span> {props.bio}</p>
</div>
    </div>
  )
}

export default ProfileCard