import React, { useState, useRef, useEffect } from "react";

const deliveryMessages = [
  "배송 메세지 선택",
  "문 앞에 놔주세요",
  "부재시 경비실에 맡겨주세요",
  "부재시 문 앞에 놔주세요",
  "직접 받을게요",
  "배송 전에 연락주세요",
  "직접입력...",
];

const DropDown = () => {
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
    <div className="pay-form">
      <div className="form-row">
        <label>배송 요청사항</label>
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
  );
};

export default DropDown;
