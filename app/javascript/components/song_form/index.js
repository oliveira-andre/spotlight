import React, { Fragment, useState } from 'react';

import { Columns, Form, Button } from 'react-bulma-components';
import FaCloudUploadAlt from 'react-icons/fa';

import './styles.css';

const SongForm = () => {
  const [musicFile, setMusicFile] = useState(null);
  const [songName, setSongName] = useState('');
  const [artistPhoto, setArtistPhoto] = useState(null);
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const enterKeySubmit = (e) => {
    if (e.key == 'enter') {
      submitForm();
    }
  }

  const submitForm = () => {
    console.log({ name: songName })
  }

  return(
    <>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }} tablet={{ size: 12 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Song File (.mp3)</Form.Label>
            <Form.Control>
              <Form.InputFile
                onChange={e => setMusicFile(e.target.files[0])}
                value={musicFile}
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
        <Columns.Column size={12}>
          <Button color='primary' className='is-fullwidth' onClick={submitForm}>
            Save
          </Button>
        </Columns.Column>
    </>
  )
}

export default SongForm;
