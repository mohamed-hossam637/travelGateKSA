import { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

import image1 from '../../assets/mo-gabrail-iuC3w8mLDcs-unsplash.jpg';
import image2 from '../../assets/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg';
import image3 from '../../assets/rumman-amin-6iSZzFMKQbs-unsplash.jpg';

import about from '../../assets/eva-darron-oCdVtGFeDC0-unsplash.jpg';

import offer1 from '../../assets/7_0f30e67e-7825-4a65-9769-46e29bb321e7.webp';
import offer2 from '../../assets/5_52b3122d-a118-424d-8ee9-2edbd05d85a9.webp';

import clint1 from '../../assets/1200px-______svg.webp';
import clint2 from '../../assets/Abdullah_Al-Othaim_Markets_Logo.png';
import clint3 from '../../assets/AlKhereiji-Logo301-640w.webp';
import clint4 from '../../assets/logo.png';

function Home() {
    useEffect(() => {
        new WOW.WOW().init();
        }, [])
    return <>
       
        <div className="home">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                    <img src={image1} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item h-100">
                    <img src={image2} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item h-100">
                    <img src={image3} className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-md-block wow fadeInRight">
                        {/* <h2 className="fw-bold text-white">
                            استمتع بعطله صيف 2024 مع ترفل جيت
                        </h2> */}
                    </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* start about */}
        <div className="small-intro py-3 mt-5 ">
            <div className="container">
                <div className="row">
                    <div className="right col-lg-7 d-flex wow fadeInRight py-3">
                    <h3 className="fw-bold mb-3">
                        نبذه عن ترفل جيت
                    </h3>
                    <p>
                    جسدنا المعنى الحقيقي لبوابة السفر.. 
                    </p>
                    <p>
                    ترافل جيت شركة سياحة غيرت مفهوم السفر وخلّت سفرتك بمثابة تجربة كامل تعيشها كأنك دخلت عالم ثاني! 
                    </p>
                    <Link className="show-more btn">
                        اقراء المزيد
                    </Link>
                    </div>
                    <div className="left col-lg-6 wow fadeInLeft sm-hidden">
                        <img src={about} alt="about image"/>
                    </div>
                </div>
            </div>
        </div>
        {/* start offers */}
        <div className="offers mt-5 py-2">
            <div className="container">
                <h2 className="text-center mt-4">
                    عروضنا
                </h2>
                <div className="row gap-3 mt-4 wow fadeInUp">
                    <div className="box col-lg-3">
                        <img src={offer1} alt="" className="cover"/>
                        <div className="info mt-2">
                            <h4 className="title fw-bold">باريس</h4>
                            <p>7 ايام - 6 ليالي</p>
                            <a href="https://api.whatsapp.com/send?phone=966112398888" className="book btn w-100">
                                احجز واتساب
                            </a>
                        </div>
                    </div>
                    <div className="box col-lg-3">
                        <img src={offer2} alt="" className="cover"/>
                        <div className="info mt-2">
                            <h4 className="title fw-bold">النمسا</h4>
                            <p>11 يوم - 10 ليالي</p>
                            <a href="https://api.whatsapp.com/send?phone=966112398888" className="book btn w-100">
                                احجز واتساب
                            </a>
                        </div>
                    </div>
                    <div className="box col-lg-3">
                        <img src={offer2} alt="" className="cover"/>
                        <div className="info mt-2">
                            <h4 className="title fw-bold">النمسا</h4>
                            <p>11 يوم - 10 ليالي</p>
                            <a href="https://api.whatsapp.com/send?phone=966112398888" className="book btn w-100">
                                احجز واتساب
                            </a>
                        </div>
                    </div>
                    <div className="box col-lg-3">
                        <img src={offer2} alt="" className="cover"/>
                        <div className="info mt-2">
                            <h4 className="title fw-bold">النمسا</h4>
                            <p>11 يوم - 10 ليالي</p>
                            <a href="https://api.whatsapp.com/send?phone=966112398888" className="book btn w-100">
                                احجز واتساب
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* start our location section */}
        <div className="our-location py-4 mt-3">
            <div className="container">
                <div className="row">
                    <div className="right col-lg-4 wow fadeInRight">
                        <h2>
                            <i class="fa-solid fa-map-pin ms-2"></i>
                            في انتظارك بفرعنا
                        </h2>
                        <p className="mt-4">
                            طريق خالد بن الوليد - الملك فيصل - الرياض <br/>
                            مواعيد العمل من ٩ صباحاً - ٦ مساءاً <br />
                            السبت إلي الخميس
                        </p>
                        <a href="https://www.google.com/maps/place/Travel+Gate+Travel+%26+Tourism/@24.752339,46.764865,15z/data=!4m6!3m5!1s0x3e2f01bcf28c3651:0x4d8ad2468e991297!8m2!3d24.7522221!4d46.7710019!16s%2Fg%2F11d_8g6_3c?entry=ttu" className="btn location">
                        الموقع علي الخريطه
                        </a>
                    </div>
                    <div className="left col-lg-8 wow fadeInLeft">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14493.032316847084!2d46.764865!3d24.752339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01bcf28c3651%3A0x4d8ad2468e991297!2z2KrYsdmB2YQg2KzZitiqINmE2YTYs9mB2LEg2YjYp9mE2LPZitin2K3YqQ!5e0!3m2!1sar!2seg!4v1712885149435!5m2!1sar!2seg" style={{'border':0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        {/* start promise */}
        <div className="promise mt-5 py-4">
            <div className="container">
                <h2 className="wow fadeInDown">
                    نوعدك
                </h2>
                <p>
                    نوعدك بتقديم افضل خدمه و باعلي جوده
                </p>
                <div className="row mt-4 gap-4">
                    <div className="service col-lg-2 wow fadeInDown">
                        <div className="icon">
                        <i class="fa-regular fa-comment-dots"></i>
                        </div>
                        <div className="text">
                            <p className="fw-bold">
                                خدمه علي مدار الساعه <br/>
                                24/7
                            </p>
                        </div>
                    </div>
                    <div className="service col-lg-2 wow fadeInDown">
                        <div className="icon">
                        <i class="fa-solid fa-shield"></i>
                        </div>
                        <div className="text">
                            <p className="fw-bold">
                            تجربه امنه ١٠٠٪
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* start our clints section */}
        <div className="our-clints mt-4 py-3">
            <div className="container">
                <h2 className="text-center wow fadeInDown">
                        عملاؤنا
                </h2>
                <div className="row-bar mt-2 w-100 py-3">
                    <div className="bar w-100">
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                        <img src={clint3} alt=""/>
                        <img src={clint4} alt=""/>
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                        <img src={clint3} alt=""/>
                        <img src={clint4} alt=""/>
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                        <img src={clint3} alt=""/>
                        <img src={clint4} alt=""/>
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                        <img src={clint3} alt=""/>
                        <img src={clint4} alt=""/>
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                        <img src={clint3} alt=""/>
                        <img src={clint4} alt=""/>
                        <img src={clint1} alt=""/>
                        <img src={clint2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Home;
// https://api.whatsapp.com/send?phone=966112398888