import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#000000")
    function handleChangeColor(e){
        setColor(e.target.value);
    }
    
    return (
        <div className='main w-full h-full flex flex-col items-center justify-center gap-10'>
            <h1 className='text-center text-3xl underline'>COLOR PICKER</h1>
            
            <div className="color-picker w-[20vw] h-[25vh] rounded-3xl" style={{ backgroundColor: color }}>
            <p className='text-white text-xl text-center py-16'>Selected Color:{color}</p>
            </div>
            <div className="input flex">
            <label htmlFor="">Pick a Color:</label>
            <input type="color" value={color} onChange={handleChangeColor} />
            </div>
        </div>
    )
}

export default ColorPicker
