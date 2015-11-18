import { createStore } from 'redux'

import React from 'react'
import { render } from 'react-dom'
import h from "react-hyperscript";

import { Provider } from 'react-redux'

import App from './component/App'
import stateReducer from "./state/reducer.js";

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = createStore(stateReducer, initialState)

render(h(Provider, {store}, [h(App)]), document.getElementById("app"));