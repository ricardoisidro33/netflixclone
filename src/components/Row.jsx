import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from 'axios'
import Movie from './Movie'

const Row = ({title,fetchURL,rowID}) => {
    const [movies,setMovies] = useState([])
    const [like, setLike] = useState(false)


    useEffect(() => {
        axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }


    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-2xl p-4'>{title}</h2>
        <div className='relative flex items-center group hover:scale-105 duration-500 hover:ml-10'>
        <MdChevronLeft onClick={slideLeft} size={60} className="bg-white left-16 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
            <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">


                {movies.map((item,id) =>(
                    <Movie key={id} item={item} />
                ))}

            </div>
            <MdChevronRight onClick={slideRight} size={60} className="bg-white right-16 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        </div>
    </>
  )
}

export default Row