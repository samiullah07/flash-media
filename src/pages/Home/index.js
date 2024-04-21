import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YouTubePlayer from '../../components/YouTubePlayer';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';



const validationSchema = yup.object({
    name: yup
      .string('Enter your Name')
      .required('Name is required'),
    email: yup
      .string('Enter your Email')
      .email('Invalid email')
      .required('Email is required')
});



function Home() {
    const [showDiv, setShowDiv] = useState(false);
    const textArray = ['לידים', 'מיתוג', 'מכירות', 'עוקבים', 'ביקוש', 'בידול', 'כסף!'];
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        AOS.init();
        const timeout = setTimeout(() => {
          setShowDiv(true);
        }, 7000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [textArray.length])

    const formik = useFormik({
        // enableReinitialize:{true: true,},
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comments: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            axios.post('your_api_link',  values).then(response => {
                if (response.success === true) {
                    resetForm();
                    Swal.fire({
                        icon: "success",
                        title: "Your Message Submit Successfully",
                        showConfirmButton: true,
                        // timer: 1500
                    });
                } else {
                  console.error('Failed to send email.');
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
        }
    });
    return(<>
    <div className="bg-black">
        <div className="relative isolate px-6 pt-14 lg:px-8 banner-area-main">
            <div className="mx-auto max-w-2xl py-10 sm:py-15 lg:py-20">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center" data-aos="fade-up" data-aos-duration="2000">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-2 ring-skyblue-50/80 hover:ring-skyblue-50/100">
                        ברוכים הבאים ללאנט מדיה
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" data-aos="fade-up" data-aos-duration="1500">
                    מחלקת Brandformance
                    במיקור חוץ</h1>
                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl" data-aos="fade-up" data-aos-duration="2000">
                        שמייצרת לך
                        <span class="text-skyblue-50 mr-3">{textArray[currentIndex]}</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300" data-aos="fade-up" data-aos-duration="1500">
                        העסקה המשתלמת בישראל!<br />
                        תהליך ייחודי מסוגו שמאפשר לכם לקבל מחלקת שיווק של 6 מוחות מומחים בתחומם שעובדים עבור העסק שלך כל יום, כולל: מנהלת סושיאל, קמפיינר, קופי-רייטר, צלם, עורך ואסטרטג
                        <br />
                        <b>במחיר של עובד אחד!</b>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6" data-aos="fade-up" data-aos-duration="2000">
                        <Link
                            to="/"
                            className="rounded-full bg-skyblue-200 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-skyblue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            לתיאום שיחת ייעוץ
                        </Link>
                    </div>
                </div>
            </div>
            <div className={showDiv === true ? 'bg-video-main' : 'opicty bg-video-main'}><YouTubePlayer videoId="HXJEakm65FI" /></div>
        </div>
    </div>



    <div className='customer-logos-main py-20'>
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-skyblue-100 sm:text-4xl text-center pb-10" data-aos="fade-down" data-aos-duration="1500">
                Customers working with us
            </h1>

            <div className='customer-slider-main' data-aos="fade-up" data-aos-duration="1500">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400:{
                            slidesPerView:1,
                        },
                        639: {
                            slidesPerView: 2,
                        },
                        865:{
                            slidesPerView:2
                        },
                        1000:{
                            slidesPerView:3
                        },
                        1500:{
                            slidesPerView:3
                        },
                        1700:{
                            slidesPerView:3
                        }
                    }}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='company-logo-box'>
                            <img src='/images/c-logo-1.png' alt='Company Logo' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='company-logo-box'>
                            <img src='/images/c-logo-2.png' alt='Company Logo' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='company-logo-box'>
                            <img src='/images/c-logo-3.png' alt='Company Logo' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='company-logo-box'>
                            <img src='/images/c-logo-4.png' alt='Company Logo' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>


    <div className='customer-logos-main sm:py-20'>
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-skyblue-100 sm:text-4xl text-center pb-6" data-aos="fade-down" data-aos-duration="1500">
                About us
            </h1>
            <p className='text-lg leading-8 text-gray-700' data-aos="fade-up" data-aos-duration="1500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='profile-images'>
                <div className='columns-3'>
                    <img src='/images/c-logo-1.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="2500" />
                    <img src='/images/c-logo-2.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="2000" />
                    <img src='/images/c-logo-3.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="1500" />
                    <img src='/images/c-logo-4.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="1000" />
                    <img src='/images/c-logo-1.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="500" />
                    <img src='/images/c-logo-3.png' alt='Company Logo' data-aos="fade-up" data-aos-duration="" />
                </div>
            </div>
        </div>
    </div>


    <div className='how-its-work-section pb-20'>
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-skyblue-100 sm:text-4xl text-center pb-10" style={{color: '#28CCBD'}} data-aos="fade-down" data-aos-duration="1500">
                ?How it works
            </h1>

            <div className='lg:columns-4 sm:columns-2 columns-1'>
                <div className='how-work-box' data-aos="fade-up" data-aos-duration="2000">
                    <div className='how-work-icon'>
                        <GlobeAltIcon className="h-9 w-9" aria-hidden="true" />
                    </div>
                    <div className='how-work-content'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='how-work-box' data-aos="fade-up" data-aos-duration="1500">
                    <div className='how-work-icon'>
                        <GlobeAltIcon className="h-9 w-9" aria-hidden="true" />
                    </div>
                    <div className='how-work-content'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='how-work-box' data-aos="fade-up" data-aos-duration="1000">
                    <div className='how-work-icon'>
                        <GlobeAltIcon className="h-9 w-9" aria-hidden="true" />
                    </div>
                    <div className='how-work-content'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='how-work-box' data-aos="fade-up" data-aos-duration="500">
                    <div className='how-work-icon'>
                        <GlobeAltIcon className="h-9 w-9" aria-hidden="true" />
                    </div>
                    <div className='how-work-content'>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className='how-its-work-section pb-20'>
        <div className="container mx-auto" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="text-4xl font-bold tracking-tight text-skyblue-50 sm:text-4xl text-center pb-10" style={{color: '#28CCBD'}}>
                Portfolio
            </h1>
            <Tab.Group data-aos="fade-up" data-aos-duration="1500">
                <Tab.List>
                    <div className='portfolio-slider-main'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={4}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                400:{
                                    slidesPerView:2,
                                },
                                639: {
                                    slidesPerView: 2
                                },
                                865:{
                                    slidesPerView:2
                                },
                                1000:{
                                    slidesPerView:3
                                },
                                1500:{
                                    slidesPerView:4
                                },
                                1700:{
                                    slidesPerView:4
                                }
                            }}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <Tab>
                                    <div className='company-logo-box'>
                                        <img src='/images/c-logo-1.png' alt='Company Logo' />
                                    </div>
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab>
                                    <div className='company-logo-box'>
                                        <img src='/images/c-logo-2.png' alt='Company Logo' />
                                    </div>
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab>
                                    <div className='company-logo-box'>
                                        <img src='/images/c-logo-3.png' alt='Company Logo' />
                                    </div>
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab>
                                    <div className='company-logo-box'>
                                        <img src='/images/c-logo-4.png' alt='Company Logo' />
                                    </div>
                                </Tab>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Tab>
                                    <div className='company-logo-box'>
                                        <img src='/images/c-logo-1.png' alt='Company Logo' />
                                    </div>
                                </Tab>
                            </SwiperSlide>
                        </Swiper>
                        <Tab.Panels>
                                <Tab.Panel>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content One</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content One</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Two</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Two</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Three</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Three</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Four</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Four</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Five</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='portfolio-content-main'>
                                                <h3>Portfolio Content Five</h3>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Tab.Panel>
                            </Tab.Panels>
                    </div>
                </Tab.List>
            </Tab.Group>
        </div>
    </div>


    <div className='contact-section py-20'>
        <div className="container mx-auto">
            <div className='contact-main-area sm:columns-2 columns-1'>
                <div className='contact-form-main-araea mb-10' data-aos="fade-down" data-aos-duration="1500">
                    <h1 className="text-4xl font-bold tracking-tight text-skyblue-100 sm:text-4xl pb-5">
                        Contact Us
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mt-3">
                            <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder='Name'
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-skyblue-200 sm:text-sm sm:leading-6"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                            />
                        </div>
                        <div className="mt-3">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder='Email'
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-skyblue-200 sm:text-sm sm:leading-6"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                           />
                        </div>
                        <div className="mt-3">
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            placeholder='Phone'
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-skyblue-200 sm:text-sm sm:leading-6"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <textarea
                            id="comments"
                            name="comments"
                            rows={4}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-skyblue-200 sm:text-sm sm:leading-6"
                            placeholder='Comments'
                            value={formik.values.comments}
                            onChange={formik.handleChange}
                           />
                        </div>
                        <button type="submit"
                            className="w-full rounded-full bg-skyblue-200 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-skyblue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='contact-image-araea' data-aos="fade-up" data-aos-duration="1500">
                    <img src="/images/camera.png" alt="Contact" />
                </div>
            </div>
        </div>
    </div>
    </>)
}





export default Home;