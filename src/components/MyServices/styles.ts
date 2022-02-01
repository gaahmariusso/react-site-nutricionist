import styled from 'styled-components';

export const Container = styled.div`
    
    margin: 3% 15% 15% 15%;

    img {
        width: 40%;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0 0;
    }

    h3 {
        margin-top: 10%;
        margin-bottom: 10%;
    }

    .cards {
        display: flex;
        flex-direction: row;
    }

    .card {
        max-width: 30%;
        margin: auto;
        text-align: center;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 10% 10% 10% 10%;
    }

    .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #3D096E;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    .card button:hover {
        opacity: 0.7;
    }

    .doubt {
        margin-top: 3%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1440px) {

        img {
            width: 40%;
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

// export const Button = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     margin-top: 5%;

//     > button {
//         background: #1a1720;
//         color: #fff;
//         opacity: 0.8;

//         font-size: 12px;
//         font-weight: 500;
//         letter-spacing: 0.4px;
//         text-transform: uppercase;

//         padding: 13px 40px;
//         margin-bottom: 50px;
//         border-radius: 20px;
//         border: none;
//         /* cursor: pointer; */

//         &.white {
//             background: #fff;
//             color: #1a1720;
//             opacity: 0.65;
//         }

//         & + button {
//             margin: 10px 0 0;
//         }
//     }

// `