import React, { Fragment } from 'react';
import { Columns } from 'react-bulma-components';

import SectionWrapper from '../../components/common/section_wrapper'
import FormSession from '../../components/form_session';

const LoginScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Columns className="is-centered is-mobile">
          <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 1 }}>
            <FormSession />
          </Columns.Column>
        </Columns>
      </SectionWrapper>
    </Fragment>
  );
}

export default LoginScreen;
