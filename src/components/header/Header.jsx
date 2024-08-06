import React, { useState } from 'react'
import photo from "../../assets/photo.webp"
const Header = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [price, setPrice] = useState("")
    const [comment, setComment] = useState("")

    const handleCreate = (e) => {
        e.preventDefault()
        let object = {
            id: new Date().getTime(),
            text,
            price,
            comment,
        }
        setData( (preve) => [...preve, object] )
        setText("")
        setComment("")
        setPrice("")
    }
    console.log(data);
    
    
  return (
    <div>
        <div className='flex justify-center  bg-slate-300 h-full  flex-col pt-48 pb-96'>
                <form onSubmit={handleCreate} className= ' bg-inherit rounded-lg mt-auto items-center justify-center flex flex-col gap-3'>
            <input placeholder='The name of the book' clas className='bg-gray-200 w-60 h-10 rounded-md p-2' required value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <input placeholder='Comment' clas className='bg-gray-200 w-60 h-10 rounded-md p-2' required value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
            <input placeholder='Price' clas className='bg-gray-200  w-60 h-10 rounded-md p-2' required value={comment} onChange={(e) => setComment(e.target.value)} type="number" />
            <button className='w-60 h-10 rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white font-sans text-xl br-'> Create </button>
            
                </form>    
            <div className='flex gap-3 flex-wrap  flex-row justify-center mt-11'>
                {
                    data?.map((item) => (
                        <div className='p-4  bg-slate-100 shadow-lg shadow-slate-500/40  rounded-xl w-80 text-center' key={item.id}>
                            <img src={photo} alt="" />
                            <p className='text-xl text-blue-700 font-mono'>
                                <span className='text-gray-500'>Book name: </span>{item.text}
                            </p>
                            <p className='text-xl text-yellow-400 font-mono'>
                                <span className='text-gray-500 font-mono'>Price:</span> {item.comment} UZ
                            </p>
                            <p className='text-xl'>
                            <span className='text-gray-500'>Comment:</span> {item.price}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header