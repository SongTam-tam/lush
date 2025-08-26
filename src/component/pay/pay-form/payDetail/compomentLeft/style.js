import styled from "styled-components";

export const PayFormStyle = styled.section`
  padding: 40px 32px;
  border-radius: 12px;
  max-width: 745px;
  margin: 0 auto;

  h3 {
    margin-top: 100px;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;

    margin-bottom: 100px;
    &:first-child {
      margin-top: 0;
    }
  }

  .form-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    &.short {
      flex: 1 1 0;
      min-width: 0;
    }
  }

  label {
    font-size: 16px;
    color: #cacaca;
    margin-bottom: 4px;
  }

  input {
    border: none;
    border-bottom: 1px solid #aaa;
    font-size: 18px;
    padding: 8px 0;
    outline: none;
    background: transparent;
    transition: border-color 0.2s;
    &::placeholder {
      color: #aaa;
      opacity: 1;
    }
  }

  input:focus {
    border-bottom: 1.5px solid #222;
  }
  textarea {
    padding: 10px 5px;
  }
  .row-group {
    display: flex;
    gap: 65px;
  }
  .custom-dropdown {
    position: relative;
    width: 100%;
    margin-top: 8px;
    font-size: 16px;
  }
  .dropdown-selected {
    padding: 12px 16px;
    border-bottom: 1px solid #848484;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #aaa;
  }
  .dropdown-list {
    position: absolute;
    left: 0;
    right: 0;
    top: 110%;
    z-index: 10;
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 220px;
    overflow-y: auto;

    border-radius: 0 0 20px 20px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
  }
  .dropdown-list li {
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid #aaa;
  }
  .dropdown-list li.selected,
  .dropdown-list li:hover {
    background: #f0f0f0;
    font-weight: 500;
  }
  .arrow {
    margin-left: 8px;
    font-size: 14px;
    color: #aaa;
  }
  /* 선물하기 */
  // ...existing code...

  .gift-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 16px;
  }

  .gift-label {
    font-size: 14px;
    color: #888;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .form-row {
    margin-bottom: 24px;
    position: relative;
  }

  .card-label {
    display: block;
    font-size: 16px;
    color: #bbb;
    margin-bottom: 10px;
  }

  .card-message {
    width: 100%;
    border: none;
    border: 1px solid #bbb;
    font-size: 18px;
    resize: none;
    background: transparent;
    color: #222;
  }

  .card-message::placeholder {
    color: #aaa;
    font-size: 14px;
  }

  .card-hint {
    position: absolute;
    right: 0;
    bottom: -22px;
    font-size: 13px;
    color: #bbb;
  }
`;
