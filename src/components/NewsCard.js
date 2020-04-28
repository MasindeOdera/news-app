import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Spinner from './Spinner';
// import News from './News';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { setLoading, updateArticles, showNews } from '../actions/newsActions';
// import { setLoading } from '../actions/newsActions';
// import { v4 as uuidv4 } from 'uuid';

export class NewsCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         article: this.props.news.article,
    //         // id: this.props.id,
    //     };
    // }

    // UNSAFE_componentWillMount() {
    //     this.props.setLoading();
    // }

    // componentDidMount() {
    //     this.props.showNews();
    //     this.props.assignID(this.props.news.id);
    //     this.setState({article: this.props.article});
    //     console.log("article", this.props.article);
    // }
    componentDidMount() {
        // this.props.article.source.id = uuidv4();
        // this.setState({article: this.props.article});
    }

    render() {
        const {article} = this.props;
        console.log(this.props);
        // console.log("this.props.news.article: ", this.props.news.article);
        // console.log("this.state.news.article: ", this.state.news.article);

        // let address = encodeURI(article.title.trim());

        let info = (<div style={articleStyle}>
                        <div style={border} className="Card">
                            <Link to={"/news/" + article.title }>
                                <div style={clearfix}>
                                <img src={article.urlToImage} alt="img" style={articleImage} />
                                <h3 style={{fontSize: '0.86rem',}}>{article.title}</h3>
                                <h4 style={articleAuthor}>- {article.author}</h4>
                                <p style={articleDescriton}>{article.description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>);

        return (
            <React.Fragment>
                {info}
            </React.Fragment>
        )
    }
}

const articleStyle = {
    color: '#000',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
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

// NewsCard.prototypes = {
//     updateArticles: PropTypes.func.isRequired,
//     // showNews: PropTypes.func.isRequired,
//     setLoading: PropTypes.func.isRequired,
//     news: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//     news: state.news.items,
//     article: state.news.article,
//     // article: state.news.items.article,
// });

// export default connect(mapStateToProps, { setLoading })(NewsCard);
export default NewsCard;
