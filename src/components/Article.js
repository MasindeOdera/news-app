import React, { Component } from 'react';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { fetchArticle, setLoading } from '../actions/newsActions';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

export class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            article: this.props.article,
        };
    }

    UNSAFE_componentWillMount() {
        this.props.setLoading();
    }

    componentDidMount() {
        let a = this.props.news;
        let idToSearch = this.props.match.params.id;
          
        function b(idToSearch) {
            return a.filter(item => {
                return item.title === idToSearch
            })
        };
        
        const test = b(idToSearch);
        this.props.setLoading();
        this.props.fetchArticle(test[0]);
        this.setState({article: test[0]});
    }

    render() {
        const {loading} = this.props;
        const {article} = this.state;

        function openTab() {
            window.open(article.url);
          };

        let articleInfo = (
            <React.Fragment>
                <Link  to={"/"}><span>Back</span></Link>
                <div style={border} className="Card">
                    <div style={clearfix}>
                        <img src={article.urlToImage} alt="img" style={articleImage} />
                        <h3>{article.title}</h3>
                        <h4 style={articleAuthor}>- {article.author}</h4>
                        <p style={articleContent}>{article.content}</p>
                        <Link to={"/"} onClick={openTab}>
                            <input 
                                type="submit" 
                                value="Original Article" 
                                className="btn" 
                                style={{flex: '1', fontSize: '8', marginTop: '10px'}}
                            />
                        </Link>
                    </div>
                </div>
            </React.Fragment>);
        let content = loading ? <Spinner /> : articleInfo;

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

const border = {
    padding: '1.2rem 10px',
    marginTop: '20px',
    height: 'auto',
}

const clearfix = {
    color: '#222',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontSize: '1.1rem',
    textAlign: 'left',
    padding: '0.2rem',
    marginTop: '-20px',
    height: 'inherit',
}

const articleImage = {
    width: '100%',
    height: '14rem',
    objectFit: 'cover',
}

const articleAuthor = {
    margin: '2px',
    width: '100%',
}

const articleContent = {
    width: '80%',
}

Article.prototypes = {
    fetchArticle: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    article: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    loading: state.news.loading,
    news: state.news.items,
    article: state.news.article,
});

export default connect(mapStateToProps, { fetchArticle, setLoading })(Article);
