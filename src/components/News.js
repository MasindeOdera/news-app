import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Spinner from './Spinner';
import ResultNotFound from './ResultNotFound';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNews, setLoading, assignID } from '../actions/newsActions';
import {HashRouter as Router} from 'react-router-dom';
import '../App.css';
// import { v4 as uuidv4 } from 'uuid';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: this.props.news,
            id: this.props.id,
        };
    }

    UNSAFE_componentWillMount() {
        this.props.setLoading();
    }

    componentDidMount() {
        this.props.showNews();
        // this.props.assignID(this.props.news.id);
        this.setState({news: this.props.articles});
        // console.log("news", this.props.news);
    }

    render() {
        const {loading, news} = this.props;
        let content = '';
        // let ids = [];
        // news.forEach(function(item, index, array) {
        //     console.log(item, index, "item/index");
        //   });
        // console.log("News.js news: ", news);
        // console.log("News.js Object.keys(news): ", Object.keys(news));
        // console.log("News.js this.props: ", this.props);
        // ids.push(Object.keys(news));
        // console.log(this.props.id);

        content = news.length > 0 ? news.map((article, index) => <NewsCard key={index} article={article} />) : <ResultNotFound /> ;

        return (
            <Router>
                <div>
                    <div style={articleStyle}>
                        {loading ? <Spinner /> : content}
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
    showNews: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    assignID: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    id: state.news.items.id,
    loading: state.news.loading,
});

export default connect(mapStateToProps, { showNews, setLoading, assignID })(News);
