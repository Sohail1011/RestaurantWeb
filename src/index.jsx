/* @refresh reload */
import { render } from 'solid-js/web'
import 'solid-devtools'
import './index.css'
import App from './App'
import 'boxicons'

const root = document.getElementById('root')

render(() => <App />, root)
