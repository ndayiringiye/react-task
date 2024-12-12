import { useState } from "react"

const ThemesToggle = () => {
  const [changeThemes, setChangeThemes] =useState(false);
  return (
    <div className="w-11/12 mx-auto overflow-y-scroll overflow-x-scroll">
    <div className={changeThemes ? "bg-slate-300 p-4 md:mt-64 lg:mt-6" : "bg-black text-white p-4 md:mt-64 lg:mt-6"}>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quibusdam itaque eius veniam alias tempora? Inventore et iste, maxime adipisci esse illum expedita eos odio consequatur vitae commodi quidem quos est fugit, soluta vel. Quasi nam quam illo autem! Vitae et iusto cupiditate laborum, laboriosam id quam ad magnam aperiam nostrum ratione quaerat dolorem odit culpa sed minima, sunt officia atque! Quae dignissimos vel iusto temporibus numquam fuga quibusdam eius vitae placeat reprehenderit quasi dolorem commodi maiores obcaecati incidunt culpa nostrum molestiae, sunt natus aperiam pariatur, deserunt tempore perspiciatis sint. Fuga odit nam deleniti eveniet. Consequatur numquam perferendis, et nesciunt veniam commodi perspiciatis odio natus eum accusantium cum fuga. Aut deleniti possimus placeat non ipsa fugiat exercitationem quo voluptatem, atque delectus. Temporibus veniam repellendus praesentium, eum distinctio blanditiis voluptatem. Consequatur, hic cupiditate, aliquam amet consectetur enim iusto, praesentium natus laudantium perferendis deserunt laboriosam itaque autem modi debitis nemo harum earum! Et fuga, soluta illo iusto harum suscipit nobis delectus veritatis aperiam accusamus aspernatur eum tenetur, assumenda necessitatibus natus? Asperiores pariatur, dolorum, blanditiis doloribus at corporis labore architecto dolore nisi suscipit modi quaerat nemo eveniet. Illum ipsa ex, qui dolores quod, obcaecati nobis aut mollitia accusantium ipsam hic aliquid repellendus!</p>
        <button onClick={() => setChangeThemes(prev => !prev)} className=" flex justify-center bg-yellow-500 text-center text-white py-2 px-3 rounded-md shadow-md">change mode {changeThemes ? "dark" : "light"}</button>
    </div>
    </div>
  )
}

export default ThemesToggle