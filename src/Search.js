import React, {Component} from 'react'

class Search extends Component {
    state={
        value: '',
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this._inpTxt}></input>
                <button type="button" onClick={this._setQuery}>검색</button>
            </div>
        );
    }

    _inpTxt = e => {
        this.setState({value: e.target.value});
    };

    _setQuery = () => {
        this.props.query(this.state.value);
    };
}

export default Search;