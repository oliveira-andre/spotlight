import React, { Fragment, useState } from 'react';

import { Columns, Form, Button } from 'react-bulma-components';
import FaCloudUploadAlt from 'react-icons/fa';

import SongsService from '../../services/songs';

import './styles.css';

const SongForm = () => {
  const [songFile, setSongFile] = useState(null);
  const [songName, setSongName] = useState('');
  const [artistPhoto, setArtistPhoto] = useState(null);
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [category, setCategory] = useState('');
  const [albumCover, setAlbumCover] = useState(null);

  const enterKeySubmit = (e) => {
    if (e.key == 'enter') {
      submitForm();
    }
  }

  async function submitForm() {
    let fd = new FormData();
    fd.append('song[file]', songFile);
    fd.append('song[title]', songName);
    fd.append('song[artist_attributes][name]', artistName);
    fd.append('song[artist_attributes][photo]', artistPhoto);
    fd.append('song[album_attributes][title]', albumName);
    fd.append('song[album_attributes][date]', releaseDate);
    fd.append('song[album_attributes][cover]', albumCover);
    fd.append('song[category_attributes][name]', category);

    let response = await SongsService.create(fd);

    if (response.status == 201) {
      setSongFile(null);
      setSongName('');
      setArtistPhoto(null);
      setArtistName('');
      setAlbumName('');
      setReleaseDate('');
      setCategory('');
      setAlbumCover(null);
      // TODO install toastr and load success message
    }
  }

  return(
    <>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Song File (.mp3)</Form.Label>
          <Form.Control>
            <Form.InputFile
              onChange={e => setSongFile(e.target.files[0])}
              value={songFile}
              boxed
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column desktop={{ size: 6 }} className='is-hidden-touch'>
        <Form.Field>
          <Form.Label className='has-text-white'>Artist Photo</Form.Label>
          <Form.Control>
            <Form.InputFile boxed />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Song Name</Form.Label>
          <Form.Control>
            <Form.Input 
              type='text'
              placeholder='Ex: Spotlight'
              onChange={e => setSongName(e.target.value)}
              onKeyPress={enterKeySubmit}
              value={songName}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} className='is-hidden-desktop'>
        <Form.Field>
          <Form.Label className='has-text-white'>Artist Photo</Form.Label>
          <Form.Control>
            <Form.InputFile
              onChange={e => setArtistPhoto(e.target.files[0])}
              value={artistPhoto}
              boxed
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Artist Name</Form.Label>
          <Form.Control>
            <Form.Input
              type='text'
              placeholder='Ex: Lil Peep & Marshmallow'
              onChange={e => setArtistName(e.target.value)}
              onKeyPress={enterKeySubmit}
              value={artistName}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Album Name</Form.Label>
          <Form.Control>
            <Form.Input
              type='text'
              placeholder='Ex: Spotlight'
              onChange={e => setAlbumName(e.target.value)}
              onKeyPress={enterKeySubmit}
              value={albumName}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Release Date</Form.Label>
          <Form.Control>
            <Form.Input
              type='date'
              onChange={e => setReleaseDate(e.target.value)}
              onKeyPress={enterKeySubmit}
              value={releaseDate}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
        <Form.Field>
          <Form.Label className='has-text-white'>Category</Form.Label>
          <Form.Control>
            <Form.Input
              type='text'
              onChange={e => setCategory(e.target.value)}
              onKeyPress={enterKeySubmit}
              value={category}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column size={12}>
        <Form.Field>
          <Form.Label className='has-text-white'>Album Cover</Form.Label>
          <Form.Control>
            <Form.InputFile
              onChange={e => setAlbumCover(e.target.files[0])}
              value={albumCover}
              boxed
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column size={12}>
        <Button color='primary' className='is-fullwidth' onClick={submitForm}>
          Save
        </Button>
      </Columns.Column>
    </>
  )
}

export default SongForm;
