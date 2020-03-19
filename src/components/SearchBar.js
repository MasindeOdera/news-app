import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews, searchNews } from '../actions/postActions';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { query: this.query};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        this.props.searchNews(e.target.value);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchNews(this.props.query);
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
    fetchNews: PropTypes.func.isRequired,
    searchNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    query: state.news.query,
});

export default connect(mapStateToProps, { fetchNews, searchNews })(SearchBar);
