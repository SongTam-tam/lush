import styled from 'styled-components';

export const PayCompleteStyle = styled.div`
    width: 100%;
    .inner {
        box-sizing: border-box;
        padding: 220px 0;
        width: 1600px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            font-size: 50px;
            margin-bottom: 50px;
        }
        button {
            display: flex;
            width: 300px;
            height: 50px;
            padding: 14px 0 15px 0;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            background: var(--Main-Black, #000);
            color: #fff;
        }
    }
`;
