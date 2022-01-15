import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    margin: 5%;

    p {
        font-size: 1.5rem;
        margin-right: 20%;
        margin-left: 20%;
    }

    img {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .container-img {
        display: flex;
        margin-top: 5%;
    }

    // .consultaPresencial {
    //     border: double 10px transparent;
    //     border-radius: 2em;
    //     background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
    //     background-origin: border-box;
    //     background-clip: content-box, border-box;
    // }

    // .consultaOnline {
    //     border: double 10px transparent;
    //     border-radius: 2em;
    //     background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
    //     background-origin: border-box;
    //     background-clip: content-box, border-box;
    // }

    @media (max-width: 1400px) {

    display: flex;
    margin-top: 3%;

        .container-img {
            display: flex;
            flex-direction: column;
        }

        img {
            width: 75%;
        }

        .consultaPresencial {
                border: double 5px transparent;
        }

        .consultaOnline {
                border: double 5px transparent;
        }
    }

    @media (max-width: 1015px) {

    display: flex;
    margin-top: 2%;

        .container-img {
            display: flex;
            flex-direction: column;
            margin-top: 2%;
        }

        p {
            font-size: 1rem;
            margin-right: 20%;
            margin-left: 20%;
        }

        img {
            width: 65%;
        }

        .consultaPresencial {
                border: double 5px transparent;
        }

        .consultaOnline {
                border: double 5px transparent;
        }
    }

`
