import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { userActionCreators } from '../../actions/user';
import { IRootState } from '../../models/root';
import Container, { ContainerSize } from '../../components/Container';
import Input from '../../components/Form';

// random data
const formLabel = [
  { id: 'email', label: 'What is your email?', type: 'email' },
  { id: 'name', label: 'What is your name?', type: 'text' },
  { id: 'password', label: 'Enter your password.', type: 'password' }
];

const mapStateToProps: (state: IRootState) => any = state => {
  const { user } = state;
  return {
    user
  };
};

const mapActionDispatchToProps: (dispatch: Dispatch) => any = dispatch => {
  const userActions = bindActionCreators(userActionCreators, dispatch);
  return {
    userActions
  };
};

interface AppProps {
  user: any;
  userActions: any;
}

const AppWithProps = (props: AppProps) => {
  const [step, setStep] = React.useState(0);
  const handleInputChange = (obj: any) => {
    props.userActions.handleUserDataEdit(obj);
  };
  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };
  const getCurrentStep = () => {
    return formLabel[step];
  };
  return (
    <div className='wrapper'>
      <Container size={ContainerSize.SM}>
        <Input
          {...getCurrentStep()}
          handleChange={handleInputChange}
          extraInputProps={{
            value: props.user[getCurrentStep().id],
            type: getCurrentStep().type
          }}
        />
        <div className='button-container'>
          {step > 0 && (
            <a
              className='button button-secondary'
              onClick={() => handleStepChange(step - 1)}
            >
              Prev
            </a>
          )}
          {step < 2 && (
            <a
              className='button button-primary'
              onClick={() => handleStepChange(step + 1)}
            >
              Next
            </a>
          )}
        </div>
      </Container>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapActionDispatchToProps
)(AppWithProps);
