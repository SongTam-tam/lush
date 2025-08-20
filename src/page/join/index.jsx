import React, { useRef, useState } from 'react';
import { JoinStyle } from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/modules/authSlice';

const Join = () => {
    const nameRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userid: '',
        password: '',
        passwordConfirm: '',
        name: '',
        dropdown: '010',
        phoneNum1: '',
        phoneNum2: '',
        email: '',
        year: '',
        month: '',
        day: '',
    });
    const {
        userid,
        password,
        passwordConfirm,
        name,
        dropdown,
        phoneNum1,
        phoneNum2,
        email,
        year,
        month,
        day,
    } = user;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            !userid.trim() ||
            !password.trim() ||
            !passwordConfirm.trim() ||
            !name.trim() ||
            !dropdown.trim() ||
            !phoneNum1.trim() ||
            !phoneNum2.trim() ||
            !email.trim() ||
            !year.trim() ||
            !month.trim() ||
            !day.trim()
        )
            return;

        dispatch(authActions.signup(user));

        setUser({
            userid: '',
            password: '',
            passwordConfirm: '',
            name: '',
            dropdown: '010',
            phoneNum1: '',
            phoneNum2: '',
            email: '',
            year: '',
            month: '',
            day: '',
        });
        navigate(`/login`);
    };

    const onReset = (e) => {
        e.preventDefault();
        setUser({
            userid: '',
            password: '',
            passwordConfirm: '',
            name: '',
            dropdown: '010',
            phoneNum1: '',
            phoneNum2: '',
            email: '',
            year: '',
            month: '',
            day: '',
        });
        nameRef.current.focus();
    };

    return (
        <JoinStyle>
            <div className="inner">
                <div className="txt">
                    <h2>SIGN UP</h2>
                    <p>
                        <span>*</span>필수 입력사항
                    </p>
                </div>

                <form onSubmit={onSubmit}>
                    <h3>기본정보</h3>
                    <p>
                        <label>
                            아이디<span>*</span>
                        </label>
                        <input
                            type="text"
                            name="userid"
                            value={userid}
                            onChange={changeInput}
                            ref={nameRef}
                        />
                        <span>영문/숫자 혹은 조합 4자리 이상</span>
                    </p>
                    <p>
                        <label>
                            비밀번호<span>*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={changeInput}
                        />
                        <span>영문/숫자 2개 이상 조함 8-20자리 이내</span>
                    </p>
                    <p>
                        <label>
                            비밀번호 확인<span>*</span>
                        </label>
                        <input
                            type="password"
                            name="passwordConfirm"
                            value={passwordConfirm}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>
                            이름<span>*</span>
                        </label>
                        <input type="text" name="name" value={name} onChange={changeInput} />
                    </p>
                    <p>
                        <label>
                            휴대전화<span>*</span>
                        </label>
                        <select name="dropdown" value={dropdown} onChange={changeInput}>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                        </select>
                        <span>-</span>
                        <input
                            type="tel"
                            name="phoneNum1"
                            value={phoneNum1}
                            onChange={changeInput}
                        />
                        <span>-</span>
                        <input
                            type="tel"
                            name="phoneNum2"
                            value={phoneNum2}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>
                            이메일<span>*</span>
                        </label>
                        <input type="email" name="email" value={email} onChange={changeInput} />
                        <button type="button">인증번호 받기</button>
                    </p>

                    <section className="add">
                        <h3>추가정보</h3>
                        <label>
                            생년월일<span>*</span>
                        </label>
                        <input type="text" name="year" value={year} onChange={changeInput} />
                        <p>년</p>
                        <input type="text" name="month" value={month} onChange={changeInput} />
                        <p>월</p>
                        <input type="text" name="day" value={day} onChange={changeInput} />
                        <p>일</p>
                    </section>

                    <button type="submit">회원가입</button>
                </form>
            </div>
        </JoinStyle>
    );
};

export default Join;
