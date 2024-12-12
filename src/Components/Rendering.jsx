import { useState } from "react"

const Rendering = () => {
    const [display, setDisplay]=useState("");

    const visibility = () =>{
        setDisplay("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit maxime iure vel quae vero deleniti perferendis ipsa rem architecto doloremque, quo, ad dolorem quasi dolor aspernatur voluptatum enim odit pariatur iusto tempora. Est magni ut culpa, explicabo eveniet expedita eligendi illo delectus eos. A molestiae deserunt in laborum itaque magnam neque culpa pariatur vero quas illo tenetur rem ex libero nostrum commodi possimus beatae velit eaque, repellendus facilis optio. Aspernatur autem tenetur molestiae quos sapiente repudiandae unde beatae placeat quisquam laborum eveniet a commodi, numquam ducimus quaerat possimus repellat omnis mollitia aliquam vel. Laboriosam possimus consequatur velit optio culpa rem, facilis quaerat fugit tenetur mollitia, ipsum quasi aspernatur eaque! Quae quibusdam natus totam eum animi facilis earum nam quod quam doloremque! Repellat molestias, ducimus nobis ullam recusandae saepe debitis! Omnis quae repellendus earum voluptates ex odio amet eveniet quis laboriosam dignissimos aliquid sint tempora quaerat quo, excepturi, quibusdam at repudiandae in laborum ipsa obcaecati animi deleniti. Quas possimus fuga distinctio obcaecati ut maxime voluptatum ipsam. Ducimus recusandae est, itaque sit, alias doloribus adipisci quod at magni odio sed fugiat culpa quaerat enim atque natus. Modi temporibus id voluptate iste hic, cumque, officiis esse cupiditate voluptatibus alias atque veritatis tempora.")
    }
  
    const [hide, setHide]=useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit maxime iure vel quae vero deleniti perferendis ipsa rem architecto doloremque, quo, ad dolorem quasi dolor aspernatur voluptatum enim odit pariatur iusto tempora. Est magni ut culpa, explicabo eveniet expedita eligendi illo delectus eos. A molestiae deserunt in laborum itaque magnam neque culpa pariatur vero quas illo tenetur rem ex libero nostrum commodi possimus beatae velit eaque, repellendus facilis optio. Aspernatur autem tenetur molestiae quos sapiente repudiandae unde beatae placeat quisquam laborum eveniet a commodi, numquam ducimus quaerat possimus repellat omnis mollitia aliquam vel. Laboriosam possimus consequatur velit optio culpa rem, facilis quaerat fugit tenetur mollitia, ipsum quasi aspernatur eaque! Quae quibusdam natus totam eum animi facilis earum nam quod quam doloremque! Repellat molestias, ducimus nobis ullam recusandae saepe debitis! Omnis quae repellendus earum voluptates ex odio amet eveniet quis laboriosam dignissimos aliquid sint tempora quaerat quo, excepturi, quibusdam at repudiandae in laborum ipsa obcaecati animi deleniti. Quas possimus fuga distinctio obcaecati ut maxime voluptatum ipsam. Ducimus recusandae est, itaque sit, alias doloribus adipisci quod at magni odio sed fugiat culpa quaerat enim atque natus. Modi temporibus id voluptate iste hic, cumque, officiis esse cupiditate voluptatibus alias atque veritatis tempora.");
    const invisible = () =>{
        setHide("")
    }

  return (
    <div className="text-center my-6 w-11/12 mx-auto">
        <p>{display}</p>
        <p>{hide}</p>
          <div className="flex justify-center gap-6 ">
     <button className="border bg-red-400 text-white py-2 px-3 rounded-md"  onClick={visibility }>show</button>
     <button className="border bg-yellow-400 text-white py-2 px-3 rounded-md"   onClick={invisible}>close</button>
     </div>
    </div>
  )
}

export default Rendering