import React from "react";
import "../scss/main.scss";

export class Fundacje extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					name: "Fundacja “Dbam o Zdrowie”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
					target: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
				},
				{
					name: "Fundacja “Dla dzieci”",
					description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
					target: "ubrania, meble, zabawki"
				},
				{
					name: "Fundacja “Bez domu”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
					target: "ubrania, jedzenie, ciepłe koce"
				},
				{
					name: "Fundacja “Zdrowie to Podstawa”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
					target: "lorem ipsum dolor sit amet"
				},
				{
					name: "Fundacja “Dzieci niczyje”",
					description: "Cel i misja: Pomoc dzieciom z domów dziecka.",
					target: "lorem ipsum dolor sit amet"
				},
				{
					name: "Fundacja “Niezamieszkali”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
					target: "lorem ipsum dolor sit amet"
				},
				{
					name: "Fundacja “Przyjazna dłoń”",
					description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
					target: "lorem ipsum dolor sit amet"
				},
				{
					name: "Fundacja “Pomoc sąsiedzka”",
					description: "Cel i misja: Pomoc dla rodzin wielodzietnych w stanie ubóstwa.",
					target: "lorem ipsum dolor sit amet"
				},
				{
					name: "Fundacja “Moje miejsce”",
					description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
					target: "lorem ipsum dolor sit amet"
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
					<div key={index} id="fundacje" className="fundacje">
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



export default Fundacje; 