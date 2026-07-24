import React, { useState } from 'react';
import './Register.css';
import { IoClose } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


function Register({ show, setShow }) {
    const [singin, setSingin] = useState(false);
    const [showpassword1, setShowpasswrd1] = useState(false)
    const [showpassword2, setShowpasswrd2] = useState(false)
    const [showpassword0, setShowpasswrd0] = useState(false)
    const [powerpassword, setPowerpassword] = useState(0)

    
    if (!show) return null;

    return (
        <div className="containet-register active" onClick={() => setShow(false)}>
            <div className="containet-items" onClick={(e) => e.stopPropagation()}>
                <div className="container-register-nabvar">
                    <p className={singin ? 'active-login' : ''} onClick={() => setSingin(true)}>
                        ورود
                    </p>
                    <p className={!singin ? 'active-singup' : ''} onClick={() => setSingin(false)}>
                        عضویت
                    </p>
                </div>
                <div className="x">
                    <IoClose className="close" onClick={() => setShow(false)} />
                </div>
                {!singin ? (
                    <div className="container-singup">
                        <div className="items-singup">
                            <div className="total-items">
                                <label>نام کاربری</label>
                                <input type="text" placeholder="نام کاربری..." />
                            </div>
                            <div className="total-items">
                                <label>شماره همراه</label>
                                <input type="tel" placeholder="0912..." />
                            </div>
                            <div className="total-items">
                                <label>ایمیل</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="total-items">
                                <label>رمز عبور</label>
                                <input type={showpassword1 === true ? 'text' : 'password'} placeholder="••••••••"  />
                                {showpassword1 === false ? <IoEyeOffOutline onClick={() => setShowpasswrd1(true)} /> : <IoEyeOutline onClick={() => setShowpasswrd1(false)} />}
                            </div>
                            <div className="total-items">
                                <label>تکرار رمز عبور</label>
                                <input type={showpassword2 === true ? 'text' : 'password'} placeholder="••••••••" />
                                {showpassword2 === false ? <IoEyeOffOutline onClick={() => setShowpasswrd2(true)} /> : <IoEyeOutline onClick={() => setShowpasswrd2(false)} />}
                            </div>
                            <button className="submit-btn">ثبت نام</button>
                        </div>
                    </div>
                ) : (
                    <div className="container-singup">
                        <div className="items-singup">
                            <div className="total-items">
                                <label>نام کاربری / ایمیل</label>
                                <input type="text" placeholder="ایمیل یا نام کاربری..." />
                            </div>
                            <div className="total-items">
                                <input type={showpassword0 === true ? 'text' : 'password'} placeholder="••••••••" />
                                {showpassword0 === false ? <IoEyeOffOutline onClick={() => setShowpasswrd0(true)} /> : <IoEyeOutline onClick={() => setShowpasswrd0(false)} />}
                            </div>
                            <button className="submit-btn">ورود به حساب</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Register;