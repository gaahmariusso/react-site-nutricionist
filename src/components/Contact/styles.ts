import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 3em 10em 2em;

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
  margin: 2rem 2rem;
  font-size: 5rem;
}

.socialsIcon i {
  margin-right: 5rem;
  color: #3D096E;
}

.socialsIcon i a {
  color: #3D096E;
}

`;
