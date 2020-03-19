import React, { Component } from 'react';
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
        console.log("After Render news & query: ", this.props.news, this.props, this.props.query);
        let newsArticles = this.props.news.map((article, index) => (
            <div key={index} style={border} className="Card">
                <div style={clearfix}>
                <img src={article.urlToImage} alt="img" style={articleImage} />
                <h3 style={{font: '2.4rem',}}>{article.title}</h3>
                <h4 style={articleAuthor}>- {article.author}</h4>
                <p style={articleDescriton}>{article.description}</p>
                </div>
            </div>
        ));

        return (
            <div>
                <div style={articleStyle}>
                    {newsArticles}
                </div>
            </div>
        )
    }
}

const border = {
    padding: '1.2rem 10px',
    marginTop: '20px',
}

const clearfix = {
    color: '#222',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontSize: '1.1rem',
    textAlign: 'left',
    cursor:'pointer',
    height: '320px',
    padding: '0.2rem',
    marginTop: '-20px',
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

const articleImage = {
    width: '100%',
    height: '10rem',
    objectFit: 'cover',
}

const articleAuthor = {
    margin: '2px',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

const articleDescriton = {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

News.prototypes = {
    showNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
});

export default connect(mapStateToProps, { showNews })(News);
