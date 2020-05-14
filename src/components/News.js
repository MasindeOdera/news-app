import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Pagination from "react-js-pagination";
import Spinner from './Spinner';
import ResultNotFound from './ResultNotFound';
import FakeNews from './FakeNews';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoading, fetchQuery, fetchNews, updateTotalCount, setCurrentPage } from '../actions/newsActions';
import {HashRouter as Router} from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: this.props.news,
            id: this.props.id,
            landing: this.props.landing,
            query: this.query,
            loading: this.props.loading,
            error: this.props.error,
            errorCode: this.props.errorCode,
            errorMessage: this.props.errorMessage,
            totalResults: this.props.totalResults,
            totalCount: this.props.totalCount,
            totalPages: this.props.totalPages,
            currentPage: this.props.currentPage,
            activePage: this.props.activePage,
        };
    }

    UNSAFE_componentWillMount() {
        this.setState({landing: true});
    }

    componentDidMount() {
        this.setState({news: this.props.articles});
        this.setState({id: this.props.news.id});
        this.setState({landing: false});
        this.setState({query: this.props.query});
        this.setState({totalCount: this.props.totalCount});
        this.props.updateTotalCount(this.props.totalCount);
    }

    handlePageChange(pageNumber) {
        //Navigate the user to the top of the page.
        window.scrollTo(0, 0);
        this.setState({activePage: pageNumber});
        this.setState({currentPage: pageNumber});
        this.props.setCurrentPage(pageNumber);
        this.props.fetchNews(pageNumber, this.props.query);
      }

    render() {
        const { news, query, loading, error, totalResults, errorCode, errorMessage } = this.props;
        
        const intro = news !== null && !loading && query === "" ? <FakeNews /> : null;
        const content = news && !loading ? news.map((article, index) => <NewsCard key={index} article={article} />) : null;
        const notFound = error === "ok" && totalResults === 0 && !loading && query.length > 0 ? <ResultNotFound /> : null;
        const pagination = totalResults > 0 && !loading ? 
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={totalResults}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
        /> : null;

        return (
            <Router>
                <div>
                    <div style={articleStyle}>
                        { intro }
                        {/* The Spinner is only visible when loading is true */}
                        {loading ? <Spinner /> : null}
                        { content }
                        { notFound }
                    </div>
                    { pagination }
                    { errorCode === "maximumResultsReached" ? 
                        <div>
                            <h4>Please refresh page.</h4>
                            <p>{errorMessage}</p>
                        </div> : null }
                </div>
            </Router>
        )
    }
}

const articleStyle = {
    color: '#000',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
}

News.prototypes = {
    setLoading: PropTypes.func.isRequired,
    fetchQuery: PropTypes.func.isRequired,
    fetchNews: PropTypes.func.isRequired,
    updateTotalCount: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    loading: state.news.loading,
    query: state.news.query,
    error: state.news.error,
    errorCode: state.news.errorCode,
    errorMessage: state.news.errorMessage,
    totalResults: state.news.totalResults,
    currentPage: state.news.currentPage,
});

export default connect(mapStateToProps, { setLoading, fetchQuery, fetchNews, updateTotalCount, setCurrentPage })(News);
