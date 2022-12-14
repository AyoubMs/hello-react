import Axios from 'axios';

// conts
const FETCH_GREETING = 'hello-rails-react/greetings/FETCH_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// state
const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const response = await Axios.get('http://localhost:4001/api/v1/message');
  const greeting = response.data.text;
  dispatch(fetchGreeting(greeting));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;