// import React, { useRef, useState } from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

// import '../../components/BannerCards.css'

// //img
// import img from '../../assets/sa.jpg'

// //react icon
// import { FaStar } from 'react-icons/fa6'

// // import required modules
// import { Pagination } from 'swiper/modules'

// import { Avatar } from 'flowbite-react'

// const Review = () => {
//   return (
//     <div className="my-12 px-4 lg:px24">
//       <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
//         Our Customers
//       </h2>
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={10}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 5,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
//             <div className="space-y-6">
//               <div className="text-amber-500 flex gap-2">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <div>
//                 <p className="mb-5">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Perferendis soluta laboriosam expedita, doloribus quia aperiam
//                   molestiae harum libero maiores? Suscipit rem earum, aut facere
//                   hic fugiat corrupti esse voluptate mollitia.
//                 </p>
//                 <Avatar img={img} rounded />
//                 <h5 className="text-lg font-medium">Mark Ping</h5>
//                 <p className="text-base">CEO, ABC Company</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default Review
