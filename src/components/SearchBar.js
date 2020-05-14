import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews, searchNews, setLoading} from '../actions/newsActions';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { query: this.query, article: this.props.article, currentPage: this.props.currentPage};
        this.timeout =  0;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        this.props.searchNews(e.target.value);
        this.props.setLoading();
        //This allows the user to search without hitting submit.
        let searchText = e.target.value;
        let currentPage = this.props.currentPage;
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.fetchNews(currentPage, searchText);
        }, 600);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchNews(this.props.currentPage, this.props.query);
        this.props.setLoading();
    }

    render() {
        return (
            <React.Fragment>
                <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Search for news article..." 
                        style={{flex: '10', padding: '5px'}}
                        value = {this.state.search}
                        onChange = {this.handleChange}
                        autoComplete="off"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
            </React.Fragment>
        )
    }
}

SearchBar.protoTypes = {
    fetchNews: PropTypes.func.isRequired,
    searchNews: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    query: state.news.query,
    currentPage: state.news.currentPage,
});

export default connect(mapStateToProps, { fetchNews, searchNews, setLoading })(SearchBar);
