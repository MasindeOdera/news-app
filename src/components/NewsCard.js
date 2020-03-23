import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNews } from '../actions/postActions';
// import Spinner from './Spinner';

export class NewsCard extends Component {
    render() {
        const {article} = this.props;
        
        return (
            <div style={articleStyle}>
                <div style={border} className="Card">
                    <div style={clearfix}>
                    <img src={article.urlToImage} alt="img" style={articleImage} />
                    <h3 style={{fontSize: '0.86rem',}}>{article.title}</h3>
                    <h4 style={articleAuthor}>- {article.author}</h4>
                    <p style={articleDescriton}>{article.description}</p>
                    </div>
                </div>
            </div>
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
    cursor:'pointer',
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

NewsCard.prototypes = {
    showNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    news: state.news.items,
    loading: state.news.loading,
});

export default connect(mapStateToProps, { showNews })(NewsCard);
