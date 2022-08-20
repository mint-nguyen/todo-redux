export type todosProps = {
	id: number;
	text: string;
	completed: boolean;
}[];

const initialState: {
	todos: todosProps;
} = {
	todos: [
		{ id: 0, text: "Learn React", completed: true },
		{ id: 1, text: "Learn Redux", completed: false },
		{ id: 2, text: "Build something fun!", completed: false },
	],
};

function nextTodoId(todos: todosProps) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
}

export default function todoReducer(state = initialState, action: any) {
	switch (action.type) {
		case "todos/todoAdded": {
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: nextTodoId(state.todos),
						text: action.payload,
						completed: false,
					},
				],
			};
		}
		case "todos/todoToggled": {
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id !== action.payload) {
						return todo;
					}

					return {
						...todo,
						completed: !todo.completed,
					};
				}),
			};
		}
		case "todos/todoDeleted": {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		}
		default:
			return state;
	}
}
