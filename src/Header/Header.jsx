import React from 'react';
import './Header.css';
import Typewriter from 'typewriter-effect';

function Header() {
    const multiText = [
        'محصولات مینیمال و خاص', 
        'تخفیف‌های استثنایی', 
        'کیفیت عالی و ارسال سریع', 
        'تجربه‌ای متفاوت از خرید'
    ];

    return (
        <div className='container-total' id="Header">
            <div className='Header-Containet'>
                <div className="Headet-text-animation">
                    <h1>فروشگاه آنلاین ما</h1>
                    <Typewriter
                        options={{
                            strings: multiText,
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 40,
                            delay: 70,
                        }}
                    />
                    <h2>بهترین انتخاب‌ها برای زیبایی خانه و سبک زندگی شما</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;