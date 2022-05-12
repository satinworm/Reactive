import { Component } from "react"

import AppInfo from "../app-info/app-info"
import SearchPannel from "../search-pannel/search-pannel"
import AppFilter from "../app-filter/app-filter"
import EmployersList from "../employers-list/employers-list"
import EmployersAddForm from "../employers-add-form/employers-add-form"

import "./app.css"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					name: "John C.",
					salary: 800,
					increase: false,
					rise: true,
					id: 1,
				},
				{ name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
				{
					name: "Carl W.",
					salary: 5000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
		}
		this.maxId = 4
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id === id)

			// const before = data.slice(0, index)
			// const after = data.slice(index + 1)

			// const newArr = [...before, ...after]

			return {
				data: data.filter((i) => i.id !== id),
			}
		})
	}
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary: +salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		}

		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr,
			}
		})
	}

	onToogleProp = (id, prop) => {
		// {// this.setState(({ data }) => ({
		// const index = data.findIndex((elem) => elem.id === id)

		// const old = data[index]
		// const newItem = { ...old, increase: !old.increase }
		// const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

		// return {
		// 	data: newArr
		// }
		// }
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	render() {
		const employees = this.state.data.length
		const increased = this.state.data.filter((item) => item.increase).length
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-pannel">
					<SearchPannel />
					<AppFilter />
				</div>

				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToogleProp={this.onToogleProp}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
