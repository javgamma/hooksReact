import React, { useState } from 'react'
import {ThumbsUp} from 'lucide-react'

const LikeButton = () => {

    const[counter, setCounter]=useState(0);

    const colors = [' bg-blue-500','bg-yellow-400','bg-red-600','bg-blue-500']
    const [colorIndex, setColorIndex] = useState(null)

    const add = () =>{
        setCounter(counter+1);
        setColorIndex(colorIndex + 1) 
        if (colorIndex + 1 >= colors.length) {
            setColorIndex(0);
          } else {
            setColorIndex(colorIndex + 1);
        }
    }



  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-4xl'>{counter} likes</h1>
      <button onClick={add}
       className={`w-16 h-8 flex justify-center items-center p-2 ${colors[colorIndex]} `} ><ThumbsUp/></button>
    </div>
  )
}

export default LikeButton
