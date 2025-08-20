import styled from "styled-components";

export const QuestionStyle = styled.div`
  width: 1600px;
  margin: auto;

  .faq-item {
    padding: 50px 0;

    &:nth-child(odd) {
      background-color: #f9f9f9;
    }

    &:nth-child(even) {
      background-color: #fff;
    }

    .question-content {
      padding-left: 110px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 90px;

        li {
          font-size: 18px;
        }
      }
    }

    .question-image {
      display: inline-block;

      img {
        display: block;
        transition: transform 0.3s ease;
        transform-origin: center;
      }

      &.active img {
        transform: rotate(180deg);
      }
    }

    .date-arrow-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 100px;

      img {
        margin-right: 100px;
      }
    }

    .answer-content {
      padding-left: 110px;
      padding-top: 25px;

      p {
        font-size: 18px;
        color: #5b5b5b;
        margin: 0;
        margin-left: 100px;
      }
    }

    &:nth-child(10) {
      .answer-content {
        p:last-of-type {
          margin-left: 109px;
        }
      }
    }
  }
`;
