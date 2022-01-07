import React from 'react';
// import Link from 'react-router-dom';

import { Container } from './styles';

import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Iframe from 'react-iframe'

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="row">
        {/* Coluna 1 */}
        <div className="col">
          <h2>Localização</h2>
          <ul className='localization'>
            <li>
              <i className='icon-frame'>
                <FaMapMarkerAlt />
              </i>
              Cidade Viva Offices - Av. Industrial, 1680, Campestre, Santo André - Torre 2, sala 104
            </li>
          </ul>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.955613352041!2d-46.539628585020765!3d-23.641760584643098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce439a18e90157%3A0x2a7b8d93ad57d818!2sCondominio%20Cidade%20Viva%20Offices!5e0!3m2!1spt-BR!2sbr!4v1641590393333!5m2!1spt-BR!2sbr"
            width="700"
            height="450"
            id="localization"
            className="localization"
            position="relative" />
        </div>
        {/* Coluna 2 */}
        <div className="col">
          <h2>Contatos</h2>
          <ul className="list-contact">
            <li>
              <i className="icon-socialmedia">
                <FaWhatsapp />
              </i>
              + 55 11 96397-2070
            </li>
            <li>
              <i className="icon-socialmedia">
                <FaTelegramPlane />
              </i>
              + 55 11 96397-2070
            </li>
            <li>
              <i className="icon-socialmedia">
                <FaRegEnvelope />
              </i>
              marinamarocci.nutri@gmail.com
            </li>
            <li className="socialsIcon">
              <i>
                <a href="https://web.facebook.com/aguiasdobosque" target="_blank"><FaFacebook /></a>
              </i>
              <i>
                <a href="https://www.instagram.com/aguiasdobosque/" target="_blank"><FaInstagram /></a>
              </i>
              <i>
                {/* <Button
                              className='myWonderfulButton'
                              onClick={
                                  () => {
                                      navigator.share({
                                          title: 'Share',
                                          text: 'whatevs',
                                          url: this.state.link
                                      }
                                      )
                                  }
                              }>
                              Compartilhar
                          </Button> */}
                <FaShareAlt />
              </i>
            </li>
          </ul>
        </div>

      </div>
    </Container>
  );
};

export default Contact;
