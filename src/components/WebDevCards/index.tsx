

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const WebDevCards = [
  
  {
    name: 'ServiceNow Certified System Administrator',
    image: 'https://nowlearning.servicenow.com/badge_image_ecc55feddb9a7700760a7104399619ed.svg',
    url: {
      page: '#',
    },
    description: 
       'November 09, 2022 - Completion Date'
    
  },
  {
    name: 'Certified Implementation Specialist - Vulnerability Response',
    image: 'https://nowlearning.servicenow.com/badge_image_ecc55feddb9a7700760a7104399619ed.svg',
    url: {
      page: '#',
    },
    description: 
       'July 10, 2023 - Completion Date'
    
  },
  {
    name: 'Micro-Certification - Integration Hub',
    image: 'https://nowlearning.servicenow.com/badge_image_5132c835db5e7700760a710439961918.svg',
    url: {
      page: '#',
    },
    description: 
       'March 17, 2023 - Completion Date'
    
  },
  {
    name: 'Micro-Certification - Predictive Intelligence',
    image: 'https://nowlearning.servicenow.com/badge_image_5132c835db5e7700760a710439961918.svg',
    url: {
      page: '#',
    },
    description: 
       'March 17, 2023 - Completion Date'
    
  },

  
  {
    name: 'SD Delta – Certified System Administrator',
    image: 'https://nowlearning.servicenow.com/Certification_badge_delta.svg',
    url: {
      page: '#',
    },
    description: 
       'May 11, 2022 - Completion Date'
    
  },
  {
    name: 'Tokyo Delta - Certified System Administrator    ',
    image: 'https://nowlearning.servicenow.com/Certification_badge_delta.svg',
    url: {
      page: '#',
    },
    description: 
       'November 09, 2022 - Completion Date'
    
  },
  
  {
    name: 'Micro-Certification - Welcome to ServiceNow',
    image: 'https://nowlearning.servicenow.com/badge_micro_certification_welcome_to_servicenow.svg',
    url: {
      page: '#',
    },
    description: 
       'March 26, 2023 - Completion Date'
    
  },
  {
    name: 'Micro-Certification - Flow Designer    ',
    image: 'https://nowlearning.servicenow.com/badge_image_5132c835db5e7700760a710439961918.svg',
    url: {
      page: '#',
    },
    description: 
       'March 17, 2023 - Completion Date'
    
  },

  {
    name: 'Micro-Certification - Citizen Developer Application Creator',
    image: 'https://nowlearning.servicenow.com/badge_image_5132c835db5e7700760a710439961918.svg',
    url: {
      page: '#',
    },
    description: 
       'March 19, 2023 - Completion Date'
    
  },


];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function WebDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <center>
        <div className={clsx('card__image')}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        </center>

        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
