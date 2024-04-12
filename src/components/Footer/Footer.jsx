function Footer() {
    return <>
    <footer className="py-5 mt-4">
        <div className="container">
            <div className="top">
                <form action="">
                    <div className="email-input">
                        <input required type="email" name="email" id="" placeholder='بريدك الاكتروني'/>
                        <button className="send-btn" type="submit">
                        <i class="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>
                    <p className="mt-2">
                    لمتابعة عروضنا والخصومات على البريد الالكتروني
                    </p>
                </form>
                <div className="social-media">
                    <ul className="p-0">
                        <li>
                            <a href="https://www.instagram.com/travelgate.ksa/">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-links row mt-5">
                <div className="col-lg-4">
                    <h5>
                        اتصل بنا
                    </h5>
                    <ul className="p-0">
                        <li className="fw-bold">
                            <a href="tel:+966112398888">
                            ٨٨٨٨ ٢٣٩ ١١ ٩٦٦+
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h5>
                    القائمه الرئيسيه
                    </h5>
                    <ul className="p-0">
                        <li>
                        عروض سياحه
                        </li>
                        <li>
                        عن ترفل جيت
                        </li>
                        <li>
                        خدماتنا
                        </li>
                        <li>
                        تآشيرات
                        </li>
                        <li>
                        تواصل معنا
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h5>
                    المزيد
                    </h5>
                    <ul className="p-0">
                        <li>
                        البحث
                        </li>
                        <li>
                        <a href="https://www.google.com/maps/place/Travel+Gate+Travel+%26+Tourism/@24.752339,46.764865,15z/data=!4m6!3m5!1s0x3e2f01bcf28c3651:0x4d8ad2468e991297!8m2!3d24.7522221!4d46.7710019!16s%2Fg%2F11d_8g6_3c?entry=ttu">
                        موقعنا
                        </a>
                        </li>
                        <li>
                        <a href="https://api.whatsapp.com/send?phone=966112398888">
                        تواصل واتساب
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright text-center mt-5">© 2024, Travel Gate. All rights reserved.</div>
        </div>
    </footer>
    </>;
}

export default Footer;