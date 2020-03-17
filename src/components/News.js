import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import '../App.css';

class News extends Component {
    // The commented out code is no longer needed because I switched to using redux.
    // For now, it is a reminder of what needed to be here.
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         news: []
    //     }
    // }
    
    // componentDidMount() {
    //     var url = 'https://newsapi.org/v2/everything?' +
    //             'q=Apple&' +
    //             'from=2020-01-20&' +
    //             'sortBy=popularity&' +
    //             'apiKey=cc9b54067d074fc88253847971a703eb';
    //     var req = new Request(url);
    //     fetch(req)
    //         .then((res) => res.json())
    //         .then(data => this.setState({news: data.articles}));
    // }

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
        this.setState({ query: e.target.value });
        // this.props.fetchPosts(e.target.value);

        // let updatedNews =  this.props.news.filter(function(article) {
        //     console.log("Query/Search: " + this.state.query, "Title: " + article.title);
        //     return article.title === this.state.query.toLowerCase();
        //     // return article.title === e.target.value.toLowerCase();
        // });

        // this.setState({
        //     query: e.target.value,
        //     news: updatedNews,
        // });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({news: this.props.articles});
        console.log("after this.props.fetchPosts: ", this.state.query);
        // console.log("after also, but looking for news data to filter through: ", this.state.news);
        console.log("after also, but looking for news data to filter through: ", this.props.news);

        // let updatedNews = this.props.news.filter(this.props.articles, article => article.title.includes(e.target.value.toLowerCase()));
        // let updatedNews = this.props.news.filter(this.props.articles, article => article.title.includes(e.target.value.toLowerCase()));
        this.setState({ query: e.target.value });
        console.log("before possible state change: ", this.state.query);
        // let updatedNews =  this.props.news.map(function(article, index) {
        //     return article.title === this.props.query.toLowerCase();
        // });

        // this.setState({
        //     query: e.target.value,
        //     news: updatedNews,
        // });
    }

    UNSAFE_componentWillMount() {
        this.props.fetchPosts();
        this.setState({news: this.props.articles});
    }

    // componentDidMount() {
    //     this.props.fetchPosts();
    //     this.setState({news: this.props.articles});
    // }

    render() {
        console.log("After Render news & query: ", this.props.news, "& ", this.state.query);
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

        if(this.state.query) {
            // console.log("Printing this if there is a search query to filter on: ", this.state.query);
            // let searchedArticle = newsArticles.filter(function (article) {
            //     return article.title === this.state.query;
            //   });
            // let newsArticles = this.props.news.map((article, index) => (article.title));
            // console.log(newsArticles);
            
        };

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
    fetchPosts: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    query: state.query,
});

export default connect(mapStateToProps, { fetchPosts })(News);
