import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; // connect props and actions to top component
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// allows state and actions to be passed down to components as props

// props to pass
function mapStateToProps(state) {
  return {
    users: state.users,
    message: state.message
  }
}

// actions to pass (import all actions as 'actionCreators')
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// passes it to 'Main' component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
