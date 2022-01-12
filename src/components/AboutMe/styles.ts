import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    margin: 3em 20em;
    font-size: 1.2rem;

    .imagePrincipal {
        border: double 5px transparent;
        border-radius: 2em;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #3D096E,#743ad5);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .aboutme-title {
        color: #3D096E;
        font-size: 2rem;
        font-weight: 500;
    }

    .aboutme-container {
        margin-left: 7%;
    }

    .aboutme-description {
        margin-top: 5%;
    }

    .aboutme-phrase {
        margin-top: 5%;
        font-family: 'TheNautigalBold', cursive;
        font-size: 2.2rem;
    }

    .aboutme-formation {
        margin-top: 5%;
        font-family: 'Geomanist';
        line-height: 50px;
    }

    .social-icons {
        display: flex;
        margin-top: 5%;
    }

    .facebook-icon {
        width: 200px;
        display: flex;
        align-items: center;

        a:last-child{
            margin-left: 5%;
        }
    }

    .insta-icon {
        width: 300px;
        display: flex;
        align-items: center;

        a:last-child{
            margin-left: 5%;
        }
        
    }

    @media (max-width: 1400px) {

        margin: 2em 2em;
        font-size: 1rem;

        .aboutme-container {
            /* margin-top: 2%; */
            margin-left: 5%;
        }    
    }

    @media (max-width: 1015px) {

        justify-content: center;
        align-items: center;

        .aboutme-container {
            margin-left: 5%;
        }

        .aboutme-description {
            margin-top: 3%;
        }

        .aboutme-phrase {
            margin-top: 3%;
        }

        .aboutme-formation {
            margin-top: 3%;
            line-height: 30px;
        }
    }
`;
