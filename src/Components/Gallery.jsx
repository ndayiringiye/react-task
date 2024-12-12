const Gallery = () => {
    const profiles =["src/assets/image copy 6.png", "src/assets/image copy 7.png", "src/assets/image copy 8.png"];
  return (
    <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto my-7 sm:grid-cols-1 sm:w-10/12 md:grid-cols-2 md:w-11/12 md:h-60  lg:grid-cols-3">
      {profiles.map((profile, index )=>(
        <img className="w-full h-60" src={profile} key={index} alt="image" />
    ))}
    </div>
  )
}

export default Gallery