import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='container-footer' id='footer'>
            <div className='items-footer'>
                <div className='items-About'>
                    <h3>
                        درباره فروشگاه
                    </h3>
                    <p>
                        تجربه خرید آنلاین آسان، سریع و مطمئن. ما بهترین محصولات را با بالاترین کیفیت و ضمانت اصالت در اختیار شما قرار می‌دهیم.
                    </p>
                </div>
                <div className='items-About-li'>
                    <h3>
                        خدمات مشتریان
                    </h3>
                    <div className="items-list">
                        <ul>
                            <li>
                                ۷ روز ضمانت بازگشت کالا
                            </li>
                            <li>
                                پشتیبانی ۲۴ ساعته
                            </li>
                            <li>
                                ضمانت اصل بودن کالا
                            </li>
                            <li>
                                تحویل اکسپرس و سریع
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='items-About-li'>
                    <h3>
                        ارتباط با ما
                    </h3>
                    <div className="items-list">
                        <ul>
                            <li>
                                آدرس: تهران، خیابان آزادی، پلاک ۱۲۳
                            </li>
                            <li>
                                تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
                            </li>
                            <li>
                                ایمیل: info@shop.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
