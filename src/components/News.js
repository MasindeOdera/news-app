import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNews, fetchNews, searchNews } from '../actions/postActions';
import '../App.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: this.query,
            news: this.props.news,
        };
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
                <h3>{article.title}</h3>
                <h3 style={articleAuthor}>- {article.author}</h3>
                <p style={articleDescriton}>{article.description}</p>
                </div>
            </div>
        ));

        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Search for news article..." 
                        style={{flex: '10', padding: '5px'}}
                        value = {this.state.query}
                        onChange = {this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
                <div style={articleStyle}>
                    {newsArticles}
                </div>
            </div>
        )
    }
}

const border = {
    padding: '2rem 0',
    marginTop: '20px',
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

const clearfix = {
    color: '#222',
    fontWeight: '700',
    textTransform: 'capitalize',
    fontSize: '1.1rem',
    textAlign: 'left',
    cursor:'pointer',
    height: '320px',
    padding: '1rem',
}

News.prototypes = {
    showNews: PropTypes.func.isRequired,
    fetchNews: PropTypes.func.isRequired,
    searchNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    query: state.news.query,
});

export default connect(mapStateToProps, { showNews, fetchNews, searchNews })(News);
