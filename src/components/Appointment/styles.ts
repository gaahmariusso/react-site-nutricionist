import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    margin: 3% 10% 0 10%;

    .description {
        text-align: center;

        p {
        font-size: 1.2rem;
        }
    }
    
    .row {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 10%;
        margin-top: 5%;
    }

    .row2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 1fr;
        grid-auto-rows: 100%;
        grid-gap: 15%;
        margin-top: 5%;

        .title {
            display: inline;
            margin-left: 5%;
            font-size: 1.3rem;
            font-weight: 700;
        }

        .content {
            margin-top: 5%;
            color: #393c41;
        }

        span {
            font-family: 'Geomanist Bold',Helvetica,Arial,Lucida,sans-serif;
            font-weight: 700;
            font-size: 2rem;
            color: #393c41;
        }
    }

    .col1 {
        h1 {
            color: #4682B4;
        }
        .title {
            color: #4682B4;
        }
    }

    .col2 {
        h1 {
            color: #7B68EE; //8A2BE2
        }
        .title {
            color: #7B68EE; //8A2BE2
        }
    }

    .doubt {
        margin-top: 10%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1400px) {

    display: flex;
    margin-top: 3%;

    }

    @media (max-width: 1015px) {

    display: flex;
    margin: 2% 2% 0 2%;

        p {
            font-size: 0.9rem;
        }

        .description {
            p {
                font-size: 1rem;
            }
        }

        .doubt {
        margin-top: 10%;
    }
        
    }

`
