import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TodoListItems, { DeleteTodoItem } from "./todoListItems";

export default function TodoList() {
	console.log(TodoListItems);
	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{TodoListItems.map((item) => {
				const labelId = `checkbox-list-label-${item}`;

				return (
					<ListItem key={item} disablePadding>
						<ListItemIcon>
							<Checkbox
								edge="start"
								tabIndex={-1}
								disableRipple
								inputProps={{ "aria-labelledby": labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={item} />
						<ListItemIcon>
							<IconButton>
								<DeleteIcon />
							</IconButton>
						</ListItemIcon>
					</ListItem>
				);
			})}
		</List>
	);
}
