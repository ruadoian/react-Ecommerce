import App from "./App"
import React from "react"
import ReactDOM from "react-dom"

import {GlobalStyles} from "./globalStyles"

ReactDOM.render(<>
                    <GlobalStyles/>
                    <App/>
               </>, document.getElementById("root")
)
