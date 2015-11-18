import { Component, PropTypes } from "react";
import { connect } from "react-redux";
import h from "react-hyperscript";


class App extends Component {
    handleClick = () => {
        this.refs.p.innerHTML = "OOPS!";
    };

    render() {
        const {dispatch} = this.props;
        return h("div", [
            h("p", {ref: "p", onClick: this.handleClick}, "Are YOU watching?")
        ]);
    }
}
App.propTypes = {};

export default connect()(App);