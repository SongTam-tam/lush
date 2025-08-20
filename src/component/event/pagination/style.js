import styled from "styled-components";

export const PagingStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  margin-top: 85px;
  margin-bottom: 162px;

  a {
    padding: 4px 8px;
    text-decoration: none;
    color: gray;
    cursor: pointer;
  }

  a:hover {
    color: black;
  }

  .arrow {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #aaa;
  }

  .arrow:disabled {
    color: #aaa;
    cursor: pointer;
  }
`;
