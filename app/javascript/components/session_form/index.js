import React, { Fragment, useEffect, useState } from 'react';
import { Form, Button } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';

import SessionsService from '../../services/sessions';

const SessionForm = () => {
  const { Input, Field, Control, Label } = Form;
  const [form, setForm] = useState({ email: '', password: '' });
  const updateForm = ((e) => setForm({ ...form, [e.target.id]: e.target.value }))

  const submitForm = (e) => {
    if (e.key === 'Enter') {
      authUser();
    }
  }

  let history = useHistory();
  async function authUser() {
    const response = await SessionsService.create({ ...form });

    if(response.status === 201) {
      setUser(JSON.stringify(response.data));
      Turbolinks.visit('/discovery'); // TODO switch this to histoy.push
    } else {
      alert('error');
    }
  }

  const setUser = (data_str) => {
    const data = JSON.parse(data_str);
    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      admin: data.admin
    };
    const token = data.token;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  return (
    <Fragment>
      <Field>
        <Control>
          <Label className="has-text-white">Email</Label>
          <Input name="session[email]" id="email" placeholder="email@example.com" value={form.email} onChange={updateForm} onKeyPress={submitForm} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Label className="has-text-white">Password</Label>
          <Input name="session[password]" id="password" placeholder="M1nh@sEnh4" type="password" value={form.password} onChange={updateForm} onKeyPress={submitForm} />
        </Control>
      </Field>
      <div className="has-text-centered">
        <Button color="primary" className="is-fullwidth" onClick={authUser}>Login</Button>
      </div>
    </Fragment>
  )
}

export default SessionForm;
