import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";

const TodoAddBar: () => JSX.Element = () => {
	const [todo, setTodo] = React.useState("");

	const dispatch = useDispatch();

	const onInput: (event: any) => void = (event: any) => {
		setTodo(event.target.value);
	};

	const onClickClear: () => void = () => {
		setTodo("");
	};

	const onClickDone: () => void = () => {
		if (todo !== "") {
			dispatch({ type: "todos/todoAdded", payload: todo });
		}
		setTodo("");
	};

	return (
		<Paper
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Add a new To-do"
				value={todo}
				onChange={onInput}
				inputProps={{ "aria-label": "new todo" }}
			/>
			<IconButton
				type="button"
				sx={{ p: "10px" }}
				aria-label="search"
				onClick={onClickClear}>
				<CloseIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<IconButton
				color="primary"
				sx={{ p: "10px" }}
				aria-label="directions"
				onClick={onClickDone}>
				<CheckIcon />
			</IconButton>
		</Paper>
	);
};

export default TodoAddBar;
