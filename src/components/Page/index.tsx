import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import AboutMe from '../AboutMe';
import Appointment from '../Appointment';
import Specialties from '../Specialties';
import MeetTheOffice from '../MeetTheOffice';
import MyServices from '../MyServices';
// import Recipes from '../Recipes';
import Contact from '../Contact';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {

  const pagesList = [
    {
      label: 'Sobre Mim',
      component: <AboutMe />
    },
    {
      label: 'Como funciona a consulta ?',
      component: <Appointment />
    },
    {
      label: 'Especialidades',
      component: <Specialties />
    },
    {
      label: 'Conheça o consultório',
      component: <MeetTheOffice />
    },
    {
      label: 'Serviços',
      component: <MyServices />
    },
    // {
    //   label: 'Receitas',
    //   component: <Recipes />
    // },
    {
      label: 'Contato',
      component: <Contact />
    }
  ]

  return (
    <Container>
      <ModelsWrapper>
        <div>
          {pagesList
            .map(({ label, component }) => (
              <ModelSection
                key={label}
                className="colored"
                modelName={label}
                overlayNode={
                  <DefaultOverlayContent
                    label={label}
                    components={component}
                  />
                }
              />

            )
            )}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page;