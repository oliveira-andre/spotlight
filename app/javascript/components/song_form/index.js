import React, { Fragment } from 'react';

import { Columns, Form } from 'react-bulma-components';
import FaCloudUploadAlt from 'react-icons/fa';

import './styles.css';

const SongForm = () => {
  return(
    <>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Artist Photo</Form.Label>
            <Form.Control>
              <Form.InputFile boxed />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Song File (.mp3)</Form.Label>
            <Form.Control>
              <Form.InputFile boxed />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Song Name</Form.Label>
            <Form.Control>
              <Form.Input type='text' placeholder='Ex: Spotlight' />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Artist Name</Form.Label>
            <Form.Control>
              <Form.Input type='text' placeholder='Ex: Lil Peep & Marshmallow' />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Album Name</Form.Label>
            <Form.Control>
              <Form.Input type='text' placeholder='Ex: Spotlight' />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} desktop={{ size: 6 }}>
          <Form.Field>
            <Form.Label className='has-text-white'>Release Date</Form.Label>
            <Form.Control>
              <Form.Input type='date' placeholder='28/04/2018' />
            </Form.Control>
          </Form.Field>
        </Columns.Column>
        <Columns.Column size={12}>
          <Button color='primary' />
        </Columns.Column>
    </>
  )
}

export default SongForm;
