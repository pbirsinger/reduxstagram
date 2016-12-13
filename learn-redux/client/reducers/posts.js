// reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state


// why is state an [] not a {} ????
function posts(state = [], action) {
	console.log(state)
	switch(action.type) {
		case 'INCREMENT_LIKES': //updated
		  console.log('incrementing likes!');
		  console.log(state);
		  const i = action.index;
		  return [
		     ...state.slice(0,i), //before one we are updating
		     {...state[i], likes: state[i].likes + 1},
		     ...state.slice(i+1), //after one we are updating
		  ]
		default:
		  return state;

	}
}



export default posts;