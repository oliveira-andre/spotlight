import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Container, Columns, Dropdown } from 'react-bulma-components';
import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';

import logoImage from '../../../../assets/images/logo.png';

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const Menu = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(
      JSON.parse(localStorage.getItem('user'))
    )
  }, []);

  let history = useHistory();
  const logout = () => {
    localStorage.clear();
    setUser(
      JSON.parse(localStorage.getItem('user'))
    )
    history.push('/login');
  }

  let loginButton;
  if (user) {
    loginButton = <Dropdown className='is-pulled-right is-right' color='dark' label={<FaUserCircle size="2em" />}>
      <Dropdown.Item value="other">
        <a href='/users/edit'>
          Edit User
        </a>
      </Dropdown.Item>
      <Dropdown.Item value="other">
        <a onClick={logout}>
          LogOut
        </a>
      </Dropdown.Item>
    </Dropdown>
  }
  else {
    loginButton = <Link to='/login' className='is-pulled-right is-right'>
      <Button outlined={true} color="white">ENTRAR</Button>
    </Link> 
  }

  return (
    <Fragment>
      <Navbar color="dark">
        <Container>
          <ColumnsFullWidth className='is-mobile'>
            <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
              <img src={logoImage} className='image'/>
            </Columns.Column>
            <Columns.Column>
              {loginButton}
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </Fragment>
  );
}
export default Menu;
