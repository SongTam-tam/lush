import React, { useState, useRef, useEffect } from "react";

const deliveryMessages = [
  "쿠폰 선택",
  "Happy Bath 15% 할인쿠폰",
  "Gift For You 20% 할인쿠폰",
  "핸드메이드 솝 10% 할인쿠폰",
  "Welcome Fresh 10% 할인쿠폰",
];

const PayMethod = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(deliveryMessages[0]);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <h3>결제정보</h3>
      <div className="pay-form">
        <div className="form-row">
          <label>쿠폰</label>
          <div className="custom-dropdown" ref={dropdownRef}>
            <div
              className="dropdown-selected"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              {selected}
              <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
            </div>
            {dropdownOpen && (
              <ul className="dropdown-list">
                {deliveryMessages.map((msg) => (
                  <li
                    key={msg}
                    className={selected === msg ? "selected" : ""}
                    onClick={() => {
                      setSelected(msg);
                      setDropdownOpen(false);
                    }}
                  >
                    {msg}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PayMethod;
