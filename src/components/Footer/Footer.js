import React from 'react';
import { footerData } from './footerData';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='md:h-[40vh] p-3 rounded-md mt-5  shadow-xl shadow-gray-900'>
      <div className=' md:grid grid-cols-5'>
        {footerData.map((footerSection, index) => (
          <div key={index} className='mb-4'>
            <h3 className='font-bold text-sky-400 my-2'>{footerSection.title}</h3>
            {footerSection.links && (
              <ul>
                {footerSection.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link className=' hover:text-sky-400 hover:font-semibold' to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            {footerSection.socialMedia && (
              <ul>
                {footerSection.socialMedia.map((socialMediaLink, socialMediaIndex) => (
                  <li key={socialMediaIndex}>
                    <a href={socialMediaLink.url} target="_blank" rel="noopener noreferrer">{socialMediaLink.platform}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
