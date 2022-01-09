import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 3em 10em 1em;

    font-size: 1.5rem;

    .aboutme-description {
        margin-top: 5%;
        margin-left: 7%;
    }

    .aboutme-phrase {
        margin-top: 10%;
    }

    img {
        border: double 5px transparent;
        border-radius: 2em;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
`;
