import React, { Component } from 'react'

export class Article extends Component {
    render() {
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

export default Article;
