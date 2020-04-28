import React, { Component } from 'react';
import NewsCard from './NewsCard';
// import Spinner from './Spinner';
// import ResultNotFound from './ResultNotFound';
import FakeNews from './FakeNews';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoading, assignID, fetchQuery } from '../actions/newsActions';
import {HashRouter as Router} from 'react-router-dom';
import '../App.css';
// import Spinner from './Spinner';
// import { v4 as uuidv4 } from 'uuid';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: this.props.news,
            id: this.props.id,
            landing: this.props.landing,
            query: this.query,
        };
    }

    UNSAFE_componentWillMount() {
        // this.props.setLoading();
        this.setState({landing: true});
    }

    componentDidMount() {
        // this.props.showNews();
        // this.props.assignID(this.props.news.id);
        // this.props.setLoading();
        this.setState({news: this.props.articles});
        this.setState({id: this.props.news.id});
        // console.log("news", this.props.news);
        this.setState({landing: false});
        this.setState({query: this.props.query});
        this.props.fetchQuery(this.props.query);
    }

    render() {
        const {news} = this.props;
        console.log("this.props after render: ", this.props);
        console.log("this.props.news after render: ", this.props.news);
        console.log("this.props.news.length after render: ", this.props.news.length);
        console.log("this.props.query.length after render: ", this.props.news.length);
        console.log("this.props.query after render: ", this.props.query);
        console.log("this.props.loading after render: ", this.props.loading);
        console.log("this.props.landing after render: ", this.props.landing);
        let content = '';
        // let ids = [];
        // news.forEach(function(item, index, array) {
        //     console.log(item, index, "item/index");
        //   });
        // console.log("News.js news: ", news);
        // console.log("News.js Object.keys(news): ", Object.keys(news));
        // console.log("News.js this.props: ", this.props);
        // ids.push(Object.keys(news));
        // const intro = this.props.loading;
        const intro = this.props.loading && this.props.news.query === undefined ? <FakeNews /> : null;
        // const intro = this.props.loading && this.props.news.length < 0 ? <LandingPage /> : null;

        content = news.length > 0 ? news.map((article, index) => <NewsCard key={index} article={article} />) : null;
        // const notFound = this.props.query.length > 0 && this.props.query !== undefined ? <ResultNotFound /> : null;
        // const notFound = this.props.query.length > 0 && this.props.news.length === 0 ? <ResultNotFound /> : null;
        // const notFound = this.props.query.length > 0 && this.props.news.length === 0 ? <ResultNotFound /> : <Spinner />;

        return (
            <Router>
                <div>
                    <div style={articleStyle}>
                        { intro }
                        { content }
                    </div>
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
    assignID: PropTypes.func.isRequired,
    fetchQuery: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    // id: state.news.items.id,
    id: state.id,
    loading: state.news.loading,
    query: state.news.query,
});

export default connect(mapStateToProps, { setLoading, assignID, fetchQuery })(News);
