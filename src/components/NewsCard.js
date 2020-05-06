import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import placeholder from '../images/placeholder.png';

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
        // let address = encodeURI(article.title.trim());

        //If there is no data provided, then a placeholder should be provided.
        let image = article.urlToImage === null ? placeholder : article.urlToImage;
        //When no author is returned with the data, it can either come back as an empty strng or null
        let author;
        if(article.author === null)
            author = "Unknown";
        else
            author = article.author.length > 0 ? article.author : "Unknown";

        let title;
        if(article.title === null)
            title = "Unknown";
        else
            title = article.title.length > 0 ? article.title : "Unknown";

        let description;
        if(article.description === null)
            description = "Unknown";
        else
            description = article.description.length > 0 ? article.description : "Unknown";


        const info = (<div style={articleStyle}>
                        <div style={border} className="Card">
                            <Link to={"/news/" + article.title }>
                                <div style={clearfix}>
                                <img src={image} alt="img" style={articleImage} />
                                <h3 style={{fontSize: '0.86rem',}}>{title}</h3>
                                <h4 style={articleAuthor}>Author: {author}</h4>
                                <p style={articleDescriton}>{description}</p>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
}

const border = {
    padding: '0rem 0px',
}

const clearfix = {
    color: '#222',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontSize: '1.1rem',
    textAlign: 'left',
    height: '310px',
    marginTop: '0px',
    backgroundColor: '#d9d9d9',
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
    fontSize: '0.96rem',
}

const articleDescriton = {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '0.86rem',
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
