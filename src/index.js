import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/app/app"

import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container)
const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
root.render(app)
