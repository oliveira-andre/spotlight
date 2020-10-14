import React, { Fragment } from 'react';

import SectionWrapper from '../../components/common/section_wrapper';

const NewSongScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Create Song</Heading>
        <SongForm />
        <ArtistForm />
        <AlbumForm />
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  );
}

export default NewSongScreen;
