import { Component, PropTypes } from "react";
import { connect } from "react-redux";
import h from "react-hyperscript";


class App extends Component {
    render() {
        const {dispatch} = this.props;
        return h("div", [
            h("p", "Are YOU watching?")
        ]);
    }
}
App.propTypes = {};

export default connect()(App);