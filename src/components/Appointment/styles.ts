import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    margin: 5%;

    img {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .container {
        display: flex;
    }

    .consultaPresencial {
        border: double 10px transparent;
        border-radius: 2em;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .consultaOnline {
        border: double 10px transparent;
        border-radius: 2em;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    @media (max-width: 1015px) {

    display: flex;
    margin-top: 3%;

        .container {
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

`
