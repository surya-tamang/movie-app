import React from 'react'

export default function Movies(props) {

    const handleOnClick = (movie) => {
        props.onWatchLaterClick(movie);
    }
    return (
        <>
            <div className="flex flex-wrap w-full justify-center pt-10">

                {
                    props.movies.map(movie => {
                        const { poster_path, title, overview } = movie;
                        return (

                            <div key={movie.id} className="movie_box h-96 w-64 m-3 rounded-md overflow-hidden relative">

                                <img className='object-cover h-full w-full' src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} />

                                <div className="overlay absolute w-full h-full left-0 flex justify-between items-center flex-col p-2">
                                    <p id="overview" className='w-full h-3/5 '>{overview}</p>
                                    <button className='flex justify-between items-center py-2 px-3 w-full rounded-md' onClick={() => handleOnClick(movie)}>
                                        <span>Watch later</span>
                                        <i className="fa-regular fa-clock"></i>
                                    </button>
                                </div>
                            </div>

                        )

                    })
                }
            </div >
        </>
    )
}
