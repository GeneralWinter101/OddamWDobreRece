import React from "react";
import "../scss/main.scss";

export class Zbiorki extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					name: "Zbiórka “Lorem Ipsum 1””",
					description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
					target: "Egestas, sed, tempus"
				},
				{
					name: "Zbiórka “Lorem Ipsum 2”",
					description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
					target: "Ut, aliquam, purus, sit, amet"
				},
				{
					name: "Zbiórka “Lorem Ipsum 3”",
					description: "Scelerisque in dictum non consectetur a erat nam.",
					target: "Mi, quis, hendrerit, dolor"
				}
			],
			currentPage: 1,
			todosPerPage: 3
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {
		const { todos, currentPage, todosPerPage } = this.state;

		// Logic for displaying current todos
		const indexOfLastTodo = currentPage * todosPerPage;
		const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

		const renderTodos = currentTodos.map((todo, index) => {
			return (
				<>
					<div key={index} id="zbiorki" className="fundacje">
						<ul className="fundacje-container">
							<li className="fundacje-name">{todo.name}</li>
							<li className="fundacje-desc">{todo.description}</li>
						</ul>
						<div className="fundacje-target">
							{todo.target}
						</div>
					</div>
					<hr></hr>
				</>
			)

		});

		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li className="fundacje-pagenumb"
					key={number}
					id={number}
					onClick={this.handleClick}
				>
					{number}
				</li>
			);
		});

		return (
			<div>
				<ul>
					{renderTodos}
				</ul>
				<ul id="page-numbers" className="fundacje-numb-container">
					{renderPageNumbers}
				</ul>
			</div>
		);
	}
}



export default Zbiorki; 