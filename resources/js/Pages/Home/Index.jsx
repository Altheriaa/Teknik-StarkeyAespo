import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';

export default function Index({ beritas, agendas, pengumumans }) {
    
    const { flash } = usePage().props;

    useEffect(() => {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }, []);

    return (
        <HomeLayout header="Home">
            <div className="index-video-hero">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* First Slide: Video */}
                    <SwiperSlide>
                        <video className="index-video" autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                            <source src="asset/Intro Teknik 1.mp4" type="video/mp4" />
                        </video>
                        <div className="swiper-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(1, 45, 4, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)', zIndex: 1 }}></div>
                        {/* <div className="slide-content">
                            <h1>Fakultas Teknik Unaya</h1>
                            <p>Mencetak generasi insinyur unggul, inovatif, dan berakhlak mulia untuk tantangan masa depan revolusi industri 5.0.</p>
                            <a href="#about" className="btn-hero">Jelajahi Sekarang</a>
                        </div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <video className="index-video" autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                            <source src="asset/Intro Teknik 1.mp4" type="video/mp4" />
                        </video>
                        <div className="swiper-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(1, 45, 4, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)', zIndex: 1 }}></div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <video className="index-video" autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                            <source src="asset/Intro Teknik 1.mp4" type="video/mp4" />
                        </video>
                        <div className="swiper-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(1, 45, 4, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)', zIndex: 1 }}></div>
                    </SwiperSlide>

                </Swiper>
            </div>

            {/* <!-- Header--> */}
            <header className="sambutan py-5">
                <div className="container px-5 mt-4 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-7">
                            {/* <!-- Header text content--> */}
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-3">
                                    <div className="text-uppercase">Fakultas Teknik Unaya</div>
                                </div>
                                <div className="fs-5 fw-light text-muted">Dr. Ir. Cut Rahmawati, M.T., IPM., ASEAN Eng.</div>
                                <h5 className="display-6 mt-2 mb-1"><span className="text-gradient d-inline">Dekan Fakultas Teknik</span>
                                </h5>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <p className="description-sambutan">
                                        Selamat datang di Fakultas Teknik Universitas Abulyatama. Fakultas Teknik UNAYA
                                        menyelenggarakan pendidikan rekayasa teknik yang memiliki keunggulan pada inovasi dan
                                        berkomitmen mencetak generasi unggul yang siap membawa perubahan. Mari bergabung bersama
                                        kami dalam penyelenggaraan pembelajaran yang terintegrasi dengan riset unggulan. Kami
                                        berkomitmen menyebarkan hasil riset unggulan untuk pengembangan Dunia Usaha dan Industri
                                        (DUDI) serta kebutuhan masyarakat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            {/* <!-- Header profile picture--> */}
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                                    <img className="profile-img" src="asset/img/bu cutt.png" alt="..." />
                                    <div className="dots-1">
                                        {/* <!-- SVG Dots--> */}
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }} xmlSpace="preserve">
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-2">
                                        {/* <!-- SVG Dots--> */}
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }} xmlSpace="preserve">
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-3">
                                        {/* <!-- SVG Dots--> */}
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }} xmlSpace="preserve">
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                    <div className="dots-4">
                                        {/* <!-- SVG Dots--> */}
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 191.6 1215.4"
                                            style={{ enableBackground: "new 0 0 191.6 1215.4" }} xmlSpace="preserve">
                                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                                                <path
                                                    d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z">
                                                </path>
                                                <path
                                                    d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z">
                                                </path>
                                                <path
                                                    d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z">
                                                </path>
                                                <path
                                                    d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z">
                                                </path>
                                                <path
                                                    d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z">
                                                </path>
                                                <path
                                                    d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z">
                                                </path>
                                                <path
                                                    d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z">
                                                </path>
                                                <path
                                                    d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z">
                                                </path>
                                                <path
                                                    d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z">
                                                </path>
                                                <path
                                                    d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z">
                                                </path>
                                                <path
                                                    d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z">
                                                </path>
                                            </g>
                                        </svg>
                                        {/* <!-- END of SVG dots--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- berita baru --> */}
            <div className="container-fluid-news">
                <h2 className="news-titles">Berita</h2>
                <p className="desc-fluid-news">Informasi Terbaru Fakultas Teknik</p>
                <div style={{ maxWidth: '167px', position: 'relative', fontSize: '16px', color: '#ffffff', textAlign: 'center', borderRadius: '5px', marginTop: '-5px' }}
                    className="badge-lainnya bg-gradient-primary-to-secondary text-white">
                    <a style={{ textDecoration: 'none', color: 'white' }} href="/berita">Lihat Berita Lainnya</a>
                </div>
                <div className="col-md-12">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                    >
                        {beritas.data.map((berita) => (
                            <SwiperSlide key={berita.id}>
                                <Link href={`/berita/${berita.slug}`} style={{ textDecoration: 'none' }}>
                                    <div className="post-slide h-100">
                                        <div className="post-img">
                                            <img src={`/storage/${berita.image_news}`} alt={berita.title} />
                                            <span className="over-layer"><i className="fa fa-link"></i></span>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="post-title">
                                                <span>{berita.title}</span>
                                            </h3>
                                            <p className="post-description">
                                                {berita.description.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...
                                            </p>
                                            <span className="post-date">
                                                <i className="fa fa-clock-o"></i> {new Date(berita.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            {/* <!-- Pop-up Modal Berita --> */}
            <div id="news-popup" className="popup" style={{ display: 'none' }}>
                {/* <div class="popup-content">
                    <span class="close" onclick="closePopup()">&times;</span>
                    <img id="popup-image" src="" alt="" style="width: 100%; border-radius: 10px; margin-bottom: 10px;">
                    <h3 id="popup-title">{{ $berita->title ?? '-'}}</h3>
                    <p id="popup-description">description</p>
                    <span id="popup-date"><i class="fa fa-clock-o"></i>date</span>
                </div> */}
            </div>
            {/* <!-- end berita baru --> */}

            <div className="announcementEvent-section">
                {/* <!-- container announcement --> */}
                <div className="container-announcement">
                    {/* <!-- pengunguman --> */}
                    <section className="announcements">
                        <h2 className="title-announcement">Pengumuman</h2>
                        {pengumumans.map((pengumuman) => (
                            <a href={pengumuman.link} className="card-link">
                                <div className="announcement">
                                    <div className="date1">
                                        <span>{pengumuman.tanggal_pengumuman}</span><br/>{pengumuman.bulan_pengumuman}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{pengumuman.judul_pengumuman}</h3>
                                        <p className="description">{pengumuman.deskripsi_pengumuman}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </section>

                    {/* <!-- agenda --> */}
                    <section className="agenda">
                        <h2 className="title-event">Agenda</h2>
                        {agendas.map((agenda) => (
                            <div className="event">
                                <div className="date"><span>{agenda.tahun_agenda}</span></div>
                                <div className="content">
                                    <h3 className="event-title">{agenda.nama_agenda}</h3>
                                    <p className="time">{agenda.masa_agenda}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* <!-- Fitur 4 -->
            <!-- card pertama --> */}
            <section className="card-section">
                <h2 className="title-portal">Portal Akademik & Kemahasiswaan</h2>
                <div className="home-container">
                    <div className="d-lg-flex justify-content-center">
                        <div className="d-md-flex align-items-center mb-lg-0 mb-md-5">
                            <div className="home-col2">
                                <a href="https://siakad.unaya.ac.id/" target="_blank" className="home-card pb-4">
                                    <span className="fas fa-building-columns mt-3"></span>
                                    <p className="home-h4 pt-4">SIAKAD</p>
                                    <p className="p1 text-center">
                                        Sistem Informasi Akademik Unaya
                                    </p>
                                    <span className="fas fa-arrow-right"></span>
                                </a>
                            </div>
                            <div className="home-col2">
                                <a href="https://simaya.unaya.ac.id/" target="_blank" className="home-card pb-4">
                                    <span className="fas fa-building-columns mt-3"></span>
                                    <p className="home-h4 pt-4">SIMAYA</p>
                                    <p className="p1 text-center">
                                        Sistem MBKM Universitas Abulyatama
                                    </p>
                                    <span className="fas fa-arrow-right"></span>
                                </a>
                            </div>
                            <div className="home-col2">
                                <a href="https://www.instagram.com/himasi_unaya?igsh=MWcybTEzaHV5czA0dw==" target="_blank"
                                    className="home-card pb-4">
                                    <span className="fas fa-computer mt-3"></span>
                                    <p className="home-h4 pt-4">HIMASI</p>
                                    <p className="p1 text-center">
                                        Himpunan Mahasiswa Sistem Informasi
                                    </p>
                                    <span className="fas fa-arrow-right"></span>
                                </a>
                            </div>
                            <div className="home-col2">
                                <a href="https://www.instagram.com/himatesya?igsh=MTR6em9wMG5uNjZtYQ==" target="_blank"
                                    className="home-card pb-4">
                                    <span className="fas fa-city mt-3"></span>
                                    <p className="home-h4 pt-4">HIMATESYA</p>
                                    <p className="p1 text-center">
                                        Himpunan Mahasiswa Teknik Sipil
                                    </p>
                                    <span className="fas fa-arrow-right"></span>
                                </a>
                            </div>
                            <div className="home-col2">
                                <a href="https://www.instagram.com/hmm_unaya?igsh=N2Fkcms3M3NlODNt" target="_blank"
                                    className="home-card pb-4">
                                    <span className="fas fa-gears mt-3"></span>
                                    <p className="home-h4 pt-4">HMM</p>
                                    <p className="p1 text-center">
                                        Himpunan Mahasiswa Teknik Mesin
                                    </p>
                                    <span className="fas fa-arrow-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pu-section">
                <div className="pu-content">
                    <div className="pu-text">
                        <h1>
                            <span className="pu-highlight">Klinik</span> Rumah <br /> <span className="pu-bold">Swadaya</span>
                        </h1>
                        <p className="pu-subtitle">Konsultasi Untuk Hunian Layak!</p>
                        <p className="pu-description">Hidup yang tenteram berawal dari rumah yang layak</p>
                        <a href="https://krs.perumahan.pu.go.id/" target="_blank" className="pu-button">Mulai Konsultasi →</a>
                    </div>
                    <div className="pu-image">
                        <img src="asset\img\swadaya.png" alt="Klinik Rumah Swadaya" />
                    </div>
                </div>
            </section>

            <section className="sponsor-logos-section">
                <div className="logos">
                    <div className="logos-slide">
                        <img src="asset/img/sponsor/Ban PT.jpg" />
                        <img src="asset/img/sponsor/Lam Teknikk.jpeg" />
                        <img src="asset/img/sponsor/Kampus Merdeka.jpg" />
                        <img src="asset/img/sponsor/Tut Wuri.jpg" />
                        <img src="asset/img/sponsor/pancacita.png" />
                        <img src="asset/img/sponsor/Syiah Kuala.png" />
                        <img src="asset/img/sponsor/UPM.png" />
                        <img src="asset/img/sponsor/teuku umar.png" />
                        <img src="asset/img/sponsor/iskandar muda.png" />
                        <img src="asset/img/sponsor/politeknik negeri lhokseumawe.png" />
                        <img src="asset/img/sponsor/instutut sains.png" />
                        <img src="asset/img/sponsor/halu oleo.png" style={{ width: '200px', height: 'auto' }} />
                        <img src="asset/img/sponsor/bank sampah.png" />
                        <img src="asset/img/sponsor/Solusi Bangun Indonesia.png" style={{ width: '200px', height: 'auto' }} />
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
