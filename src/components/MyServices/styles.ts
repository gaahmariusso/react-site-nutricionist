import styled from 'styled-components';

export const Container = styled.div`
    
    margin: 3% 15% 0 15%;

    img {
        max-width: 50%;
    }

    h3 {
        margin-top: 10%;
        margin-bottom: 10%;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 100%;
        grid-gap: 5%;
    }

    .card {
        max-height: 90%;
        text-align: center;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 10% 10%;
    }

    .card button {
        border: none;
        border-radius: 0 0 5px 5px;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #3D096E;
        text-align: center;
        width: 100%;
        font-size: 18px;
    }

    .card button:hover {
        opacity: 0.7;
    }

    .doubt {
        margin-top: 10%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1440px) {

        img {
            width: 60%;
            border-radius: 5px 5px 0 0;
        }
    }

    @media (max-width: 1015px) {

        margin: 3% 5% 5% 15%;

        img {
            width: 30%;
        }

        .card button {
            font-size: 15px;
        }
    }
`