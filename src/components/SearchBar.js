import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({ search: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.search);
        this.props.fetchPosts(this.state.search);
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Search for news article..." 
                        style={{flex: '10', padding: '5px'}}
                        value = {this.state.search}
                        onChange = {this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

SearchBar.protoTypes = {
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps, { fetchPosts })(SearchBar);
// export default SearchBar;
