import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaComment } from "react-icons/fa6";
import { RiShareFill } from "react-icons/ri";
const ProductCard = (props) => {
  const [isLinked, setIsLinked] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false);
  return (
      <div className="border border-blue-400 py-3 px-4 md:py-3 md:px-4">
        {comment && <textarea>comment</textarea>}
        {isLinked && <p className="flex justify-end  bg-blue-400 py-2 px-3 shadow-md rounded-md text-white w-44   ">This product is linked</p>}
        <h1 className="sm:px-6 md:px-2">{props.product}</h1>
        <p><span className="text-black font-semibold sm:px-6 md:px-2">Price :</span> {props.price}</p>
        <img className="w-96 h-80 sm:w-11/12 sm:px-6 md:w-full md:h-80 md:px-2" src={props.image} alt="image" />
        <div className="relative P-2">
          <div className="absolute cursor-pointer right-2 top-5 flex gap-3"
            onClick={() => setIsLinked(prev => !prev)}>
            {isLinked ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div className="absolute cursor-pointer right-10 top-5 flex gap-3" onClick={() => setComment(prevComment => !prevComment)}>
            {comment ? <FaComment /> : <FaRegComment />}
          </div>
          <div className="absolute cursor-pointer right-20 top-5 flex gap-3" onClick={() => setShare(prevShare => !prevShare)}>
            {share ? <RiShareFill /> : <IoShareSocialOutline />}
          </div>
        </div>
      </div>
  )
}

export default ProductCard