import React, { Fragment } from 'react';
import { Columns } from 'react-bulma-components';

import SectionWrapper from '../../components/common/section_wrapper'
import SessionForm from '../../components/session_form';

const LoginScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Columns className="is-centered is-mobile">
          <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 1 }}>
            <SessionForm />
          </Columns.Column>
        </Columns>
      </SectionWrapper>
    </Fragment>
  );
}

export default LoginScreen;
