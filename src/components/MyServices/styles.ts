import styled from 'styled-components';

export const Container = styled.div`

`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 130px;

    > button {
        background: #1a1720;
        color: #fff;
        opacity: 0.8;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        cursor: pointer;

        &.white {
            background: #fff;
            color: #1a1720;
            opacity: 0.65;
        }

        & + button {
            margin: 10px 0 0;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 90px;

        > button + button {
            margin: 0 0 0 10px;
        }
    }
`