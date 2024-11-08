import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterMovies } from '../features/carouselSlice'
import Slider from 'react-slick'
import Modal from 'react-modal'
import { openModal, closeModal } from '../features/modalSlice'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


Modal.setAppElement('#root');
const LandingPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.carousel?.movies || [])
  // const isModalOpen = useSelector(state => state.modal.isModalOpen)
  const [searchItem, setSearchItem] = React.useState('')
  const isModalOpen = useSelector(state => {
    console.log('Modal State:', state.modal.isModalOpen)
    return state.modal.isModalOpen
  })
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value)
    dispatch(filterMovies(e.target.value))
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header className='flex flex-col sm:flex-row justify-between items-center bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg gap-4 sm:gap-0'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white hover:text-blue-400 transition-colors'>KDN</h1>
          <button 
              className='w-full sm:w-auto bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 transform hover:scale-105'
              onClick={() => dispatch(openModal())}
          >Login/Register</button>
      </header>
      <input 
        type='text'
        placeholder='Search'
        value={searchItem}
        onChange={handleSearch}
        className='w-full mt-4 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
      />

      <Slider {...settings}>
          {movies.map((movie) => (
              <div key={movie.id} className="px-2">
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                      <div className="relative">
                          <img src={movie.poster || 'https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={movie.title} className="w-full h-36 sm:h-48 object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                              <h2 className="text-lg sm:text-xl font-semibold text-white truncate">{movie.title}</h2>
                              <p className="text-xs sm:text-sm text-gray-200">{movie.year}</p>
                          </div>
                      </div>
                      <div className="p-3 sm:p-4">
                          <div className="flex items-center justify-between">
                              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Rating: {movie.rating}</span>
                              <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </Slider>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
        contentLabel="Login/Register"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-xl p-4 sm:p-8 dark:bg-slate-800 w-[90%] sm:w-96 max-w-md mx-auto"
        overlayClassName="fixed inset-0 bg-slate-500 bg-opacity-75"
      >
          <h2 className='text-xl sm:text-2xl font-bold text-white'>Login/Register</h2>
          <p className='text-base sm:text-lg'>Please login or register to continue</p>
          <form className='flex flex-col mt-4'>
              <input type='text' placeholder='Username' className='w-full mt-4 p-2 rounded' />
              <input type='password' placeholder="Password" className='w-full mt-4 p-2 rounded' />
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Login/Register</button>
          </form>
      </Modal>
  </div>
  )
};
export default LandingPage;