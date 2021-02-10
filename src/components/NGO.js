import React from "react";

export class NGO extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					name: "Fundacja “Dbam o Zdrowie”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
				},
				{
					name: "Fundacja “Dla dzieci”",
					description: "Cel i misja: Pomoc dzieciom z ubogich rodzin."
				},
				{
					name: "Fundacja “Bez domu”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
				},
				{
					name: "Fundacja “Zdrowie to Podstawa”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
				},
				{
					name: "Fundacja “Dzieci niczyje”",
					description: "Cel i misja: Pomoc dzieciom z domów dziecka."
				},
				{
					name: "Fundacja “Niezamieszkali”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
				},
				{
					name: "Fundacja “Przyjazna dłoń”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
				},
				{
					name: "Fundacja “Pomoc sąsiedzka”",
					description: "Cel i misja: Pomoc dla rodzin wielodzietnych w stanie ubóstwa."
				},
				{
					name: "Fundacja “Moje miejsce”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
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
				<div >
					<ul key={index}>
					<li>{todo.name}</li>
					<li>{todo.description}</li>
				</ul>
				</div>
			)

		});

		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
					onClick={this.handleClick}
				>
					{number}
				</li>
			);
		});

		return (
			<div id="sub-ngo">
				<ul>
					{renderTodos}
				</ul>
				<ul id="page-numbers">
					{renderPageNumbers}
				</ul>
			</div>
		);
	}
}



export default NGO; 