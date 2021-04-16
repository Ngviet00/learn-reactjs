import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from './../../components/';
import queryString from 'query-string';

function ListPage(props) {
	const initialState = [
		{
			id: 1,
			title: 'Rua bat',
			status: 'completed',
		},
		{
			id: 2,
			title: 'Nau com',
			status: 'new',
		},
		{
			id: 3,
			title: 'Quet nha',
			status: 'new',
		},
	];

	const [todoList, setTodoList] = useState(initialState);

	const handleTodoClick = (todo, idx) => {
		const newTodoList = [...todoList];
		newTodoList[idx] = {
			...newTodoList[idx],
			status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
		};
		setTodoList(newTodoList);
	};

	const location = useLocation();
	const match = useRouteMatch();
	const history = useHistory();

	const [filter, setFilter] = useState(() => {
		const param = queryString.parse(location.search);
		return param.status || 'all';
	});

	useEffect(() => {
		const param = queryString.parse(location.search);
		setFilter(param.status || 'all');
	}, [location.search]);

	const handleShowAll = () => {
		const queryParam = { status: 'all' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParam),
		});
	};
	const handleShowCompleted = () => {
		const queryParam = { status: 'completed' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParam),
		});
	};
	const handleShowNew = () => {
		const queryParam = { status: 'new' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParam),
		});
	};

	const renderTodoList = todoList.filter((todo) => filter === 'all' || filter === todo.status);

	return (
		<div>
			<TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
			<button onClick={handleShowAll}>Show All</button>
			<button onClick={handleShowCompleted}>Show Completed</button>
			<button onClick={handleShowNew}>Show New</button>
		</div>
	);
}

export default ListPage;
