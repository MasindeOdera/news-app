import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNews, setLoading } from '../actions/postActions';
import {HashRouter as Router} from 'react-router-dom';
import '../App.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: this.props.news,
        };
    }

    UNSAFE_componentWillMount() {
        this.props.setLoading();
    }

    componentDidMount() {
        this.props.showNews();
        this.setState({news: this.props.articles});
    }

    render() {
        const {loading, news} = this.props;
        let content = '';

        content = news.length > 0 ? news.map((article, index) => <NewsCard key={index} article={article} />) : null;

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
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    loading: state.news.loading,
});

export default connect(mapStateToProps, { showNews, setLoading })(News);
