import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SpaVisualStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { CiCalendar } from 'react-icons/ci';
const SpaVisual = () => {
    const { option, times } = useSelector((state) => state.option);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(option[0]);
    const dropdownRef = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selected2, setSelected2] = useState(option[0]);
    const [selectedOption, setSelectedOption] = useState(option);
    const dropdownRef2 = useRef(null);
    const [isOpenTime, setIsOpenTime] = useState(false);
    const [timeSelect, setTimeSelect] = useState(times[0]);
    const [timeSelectOption, setTimeSelectOption] = useState(times);
    const dropdownRef3 = useRef(null);

    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        const AdultOpen = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const childOpen = (event) => {
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setIsOpen2(false);
            }
        };
        const timeOpen = (e) => {
            if (dropdownRef3.current && !dropdownRef3.current.contains(e.target)) {
                setIsOpenTime(false);
            }
        };
        //
        document.addEventListener('mousedown', timeOpen);
        document.addEventListener('mousedown', AdultOpen);
        document.addEventListener('mousedown', childOpen);
        return () => {
            document.removeEventListener('mousedown', timeOpen);
            document.removeEventListener('mousedown', AdultOpen);
            document.removeEventListener('mousedown', childOpen);
        };
    }, []);
    // useEffect(() => {
    //     const childOpen = (event) => {
    //         if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
    //             setIsOpen2(false);
    //         }
    //     };
    //     document.addEventListener('mousedown', childOpen);
    //     return () => {
    //         document.removeEventListener('mousedown', childOpen);
    //     };
    // }, []);
    useEffect(() => {}, []);
    return (
        <SpaVisualStyle>
            <h2>SPA</h2>
            <div className="spa-store">
                <strong className="spatitle">Flagship Store</strong>
                <span className="pikDate">Date</span>
                <p className="cal">
                    <i>
                        <CiCalendar />
                    </i>
                </p>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    minDate={startDate}
                    dateFormat="yyyy.MM.dd"
                />
                <div className="selectPosition">
                    <div className="custom-select" ref={dropdownRef}>
                        <div className="ppp">
                            <img
                                src={isOpen ? 'images/spa/Vector_2.png' : 'images/spa/Vector_1.png'}
                                alt=""
                            />
                        </div>
                        <div className="selected" onClick={() => setIsOpen(!isOpen)}>
                            <p>Adult</p>
                            {selected.label}
                        </div>
                        {isOpen && (
                            <ul className="options">
                                {option.map((option) => (
                                    <li
                                        key={option.value}
                                        onClick={() => {
                                            setSelected(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <p>Adult</p>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="selectPosition2">
                    <div className="ppp">
                        <img
                            src={isOpen2 ? 'images/spa/Vector_2.png' : 'images/spa/Vector_1.png'}
                            alt=""
                        />
                    </div>
                    <div className="custom-select" ref={dropdownRef2}>
                        <div className="selected" onClick={() => setIsOpen2(!isOpen2)}>
                            <p>Chlidren</p>
                            {selected2.label}
                        </div>
                        {isOpen2 && (
                            <ul className="options">
                                {selectedOption.map((option) => (
                                    <li
                                        key={option.value}
                                        onClick={() => {
                                            setSelected2(option);
                                            setIsOpen2(false);
                                        }}
                                    >
                                        <p>Chlidren</p>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="timePosition">
                    <div className="ppp">
                        <img
                            src={isOpenTime ? 'images/spa/Vector_2.png' : 'images/spa/Vector_1.png'}
                            alt=""
                        />
                    </div>
                    <div className="custom-select" ref={dropdownRef3}>
                        <div className="selected" onClick={() => setIsOpenTime(!isOpenTime)}>
                            <p>Time</p>
                            {timeSelect.label}
                        </div>
                        {isOpenTime && (
                            <ul className="options">
                                {timeSelectOption.map((option) => (
                                    <li
                                        key={option.value}
                                        onClick={() => {
                                            setTimeSelect(option);
                                            setIsOpenTime(false);
                                        }}
                                    >
                                        <p>Time</p>
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="shopcheck">
                    <p>매장 확인하기</p>
                </div>
            </div>
        </SpaVisualStyle>
    );
};

export default SpaVisual;
