import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions/postActions';
import PropTypes from 'prop-types';

export class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            article: this.props.article,
        };
    }

    UNSAFE_componentWillMount() {
        let a = this.props.news;
        let idToSearch = this.props.match.params.id;
          
        function b(idToSearch) {
            return a.filter(item => {
                return item.title === idToSearch
            })
        };
        
        const test = b(idToSearch);
        console.log("test, but hopefully article object: ", test[0]);
        this.props.fetchArticle(this.props.article);
        this.props.fetchArticle(test[0]);
        this.setState({article: test[0]});
    }

    componentDidMount() {
        console.log("this.props: ", this.props);
        console.log(this.props.news);
        console.log(this.state.article);

    }
    render() {
        const {article} = this.props;
        console.log(this.state.article);

        return (
            <React.Fragment>
                <div style={border} className="Card">
                    <div style={clearfix}>
                    <img src={article.urlToImage} alt="img" style={articleImage} />
                    <h3 style={{fontSize: '0.86rem',}}>{article.title}</h3>
                    <h4 style={articleAuthor}>- {article.author}</h4>
                    <p style={articleDescriton}>{article.description}</p>
                    </div>
                </div>
            </React.Fragment>
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
    height: '310px',
    padding: '0.2rem',
    marginTop: '-20px',
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

Article.prototypes = {
    fetchArticle: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    article: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    loading: state.news.loading,
    news: state.news.items,
    article: state.news.article,
});

export default connect(mapStateToProps, { fetchArticle })(Article);
