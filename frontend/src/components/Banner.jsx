import React from 'react'
// import BannerCards from './BannerCards'

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-gray-400 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Read Books in here and Buy{' '}
            <span className="text-blue-700">for best price</span>
          </h2>
          <p className="md:w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            dolor omnis obcaecati nam, vel aut rem placeat minima facere rerum
            dolores, sapiente, debitis aperiam iusto voluptatibus cumque quo
            alias error.
          </p>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
