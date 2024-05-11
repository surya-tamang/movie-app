import React, { useState } from 'react'


export default function WatchLater({ watchLaterList, removeFromWatchLater }) {

    const [onTop, setOnTop] = useState(false)

    const openBox = () => {
        setOnTop(true)
    }
    const closeBox = () => {
        setOnTop(false)
    }

    return (
        <>
            <button className="watch_later absolute right-5 bg-transparent rounded-lg p-1 top-2" onClick={openBox}>
                <i className="fa-regular fa-clock"></i>
            </button>

            <div className={`watch_later_container absolute ${onTop ? 'slide_bottom' : ''} p-3 flex flex-col gap-5 overflow-y-scroll z-20`}>
                <button onClick={closeBox} className='w-12 rounded-full p-1'>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>

                {watchLaterList.map((movie) => {
                    return (
                        <li key={movie.id} className='w-full flex justify-between items-center p-2 rounded-md'>
                            <span>{movie.title}</span><button className='p-2 rounded-md' onClick={() => removeFromWatchLater(movie)}>Remove</button>
                        </li>
                    )
                })}
            </div>
        </>
    )
}