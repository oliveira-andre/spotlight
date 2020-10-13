import React, { Fragment } from 'react';
import Album from '../album';
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const albums_mock = [
  { id: 1, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--799864becde6954163165f4d5fda4c6f733ad6d0/gubernator.jpg' },
  { id: 2, artist_name: 'Andrew Howes', title: 'The Great Bear', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfd67a7563fd2a34c5f1deafd4e94a8ba63b541c/the_great_bear.jpg' },
  { id: 3, artist_name: 'Yellow Chair', title: 'Barcelona', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a49bdb542106a0dc6a5cb71850920e71df8d4672/barcelona.jpg' },
  { id: 4, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--799864becde6954163165f4d5fda4c6f733ad6d0/gubernator.jpg' },
];

const albums = albums_mock.map((album, key) =>
  <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
    <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={key}/>
  </Columns.Column>
);

const Discovery = () => {
  return (
    <Fragment>
      <div>
        <Heading className='has-text-white' size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </div>

      <DivVSpaced>
        <Heading className='has-text-white' size={4}>
          Recomendadas
        </Heading>
        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </DivVSpaced>
    </Fragment>
  );
}
export default Discovery;
