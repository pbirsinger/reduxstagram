function postComments(state=[], action) {
	switch(action.type){
		case 'ADD_COMMENT':
		  return [...state,{
		  	user:action.author,
		  	text:action.comment
		  }]
		case 'REMOVE_COMMENT':
		  console.log('removing!')
		  return [
		    ...state.slice(0,action.i),
		    ...state.slice(action.i + 1)
		  ]
		 default:
		   return state;

	}
    return state;
}

function comments(state = [], action) {
	console.log('in comments!!');
	console.log(state);
	console.log('posts2');
		    
	if (typeof action.postId !== 'undefined') {
		return {
			...state,
			// overwite post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;