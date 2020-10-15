import React, { Fragment, useState } from 'react';
import { Columns, Heading, Button } from 'react-bulma-components';
import { FaCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer';
import SongForm from '../../components/song_form';

import './styles.css';

const NewSongScreen = () => {
  const [allFormData, setAllFormData] = useState({});

  return(
    <Fragment>
      <SectionWrapper>
        <Columns className='is-mobile'>
          <Columns.Column size={12}>
            <Heading className='has-text-centered has-text-white'>Create Song</Heading>
          </Columns.Column>
          <SongForm />
        </Columns>
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  );
}

export default NewSongScreen;
