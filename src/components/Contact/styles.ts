import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 5em 10em;

h2 {
  color: black;
  margin-bottom: 2rem;
}

ul {
  list-style-type: none;
  margin-block-start: 0;
  padding: 0;
}

li {
  padding-bottom: 1rem;
}

.list-contact {
  font-size: 1.5rem;
}

.row {
  display: grid;
  grid-template-columns: auto auto;
}

.col {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
}

.icon-socialmedia {
  margin-right: 1rem;
}

.icon-frame {
  margin-right: 1rem;
}

.socialsIcon {
  margin: 2rem 1rem;
  font-size: 4rem;
}

.socialsIcon i {
  margin-right: 3rem;
}

.shareButton {
  cursor: pointer;
  background: none;
  border:none;
}

@media (max-width: 1440px) {

  display: flex;
  margin: 3% 5%;
  font-size: 0.8rem;

  .icon-frame {
    margin-right: 1rem;
  }

  .iframe {
    width: 600px;
    height: 400px;
  }
}

@media (max-width: 1015px) {

  display: flex;
  margin: 5% 3%;
  font-size: 0.8rem;

  li {
    font-size: 0.8rem;
  }

  .icon-frame {
    margin-right: 1rem;
  }

  .iframe {
    width: 450px;
    height: 250px;
  }

  img {
    width: 50px;
    height: 50px;
  }

}

`;
