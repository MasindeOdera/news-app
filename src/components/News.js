import React, { Component } from 'react';
import NewsCard from './NewsCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNews } from '../actions/postActions';
import '../App.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: this.props.news,
        };
    }

    UNSAFE_componentWillMount() {
        this.props.showNews();
        this.setState({news: this.props.articles});
    }

    render() {
        // const {loading} = this.props;
        const {news} = this.props;
        let content = '';

        content = news.length > 0 ? news.map((article, index) => <NewsCard key={index} article={article} />) : null;
        // console.log("Deconstructed news: ", news);
        // console.log("After Render news & query: ", news, this.props, this.props.query);

        return (
            <div>
                <div style={articleStyle}>
                    {content}
                </div>
            </div>
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
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    loading: state.news.loading,
});

export default connect(mapStateToProps, { showNews })(News);
