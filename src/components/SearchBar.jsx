import React from 'react'

export default function SearchBar({ value, setValue, searchMovie }) {
    return (
        <>
            <input value={value} onChange={(e) => { setValue(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' ? searchMovie() : ''} id='search' type="search" placeholder='Search here...' className='py-2 px-2 w-7/12 rounded-lg outline-none border-2' />
            <button
                onClick={() => searchMovie()}
                className="p-2 rounded-xl ml-2"
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </>
    )
}