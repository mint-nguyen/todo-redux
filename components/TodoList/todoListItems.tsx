const TodoListItems = ["Sleep", "Code", "Eat", "Repeat"];

export const AddTodoItem = async (item: string) => {
	TodoListItems.unshift(item);
};

export const DeleteTodoItem = (item: string) => {
	const indexOfItem = TodoListItems.indexOf(item);
	TodoListItems.splice(indexOfItem, 1);
};

export default TodoListItems;
