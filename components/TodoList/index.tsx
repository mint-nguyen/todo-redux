import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";

export default function TodoList() {
	const selectTodos = (state: { todos: any }) => state.todos;

	const todos = useSelector(selectTodos);

	const dispatch = useDispatch();

	const onClickDelete = (id: number) => {
		dispatch({ type: "todos/todoDeleted", payload: id });
	};

	const onClickCheck = (id: number) => {
		dispatch({ type: "todos/todoToggled", payload: id });
	};
	return (
		<Card
			sx={{
				width: "100%",
				minWidth: 360,
				bgcolor: "background.paper",
				padding: 2,
			}}>
			<List>
				{todos.map((item: { id: number; text: string; completed: boolean }) => (
					<ListItem key={item.id} disablePadding>
						<ListItemIcon>
							<Checkbox
								edge="start"
								checked={item.completed}
								onClick={() => onClickCheck(item.id)}
							/>
						</ListItemIcon>
						<ListItemText id={item.id.toString()} primary={item.text} />
						<ListItemIcon>
							<IconButton onClick={() => onClickDelete(item.id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemIcon>
					</ListItem>
				))}
			</List>
		</Card>
	);
}
