import { FETCH_NEWS, SEARCH_NEWS, FETCH_ARTICLE, LOADING, ASSIGN_ID, UPDATE_ARTICLES, FETCH_QUERY } from './types';

//Created currentDate to get the latest data with my developer's plan at News API.
//The developer plan will not fetch data too far in the past. 
let zero = "0";
let d = new Date();
let year = d.getFullYear().toString();
let initialMonth = d.getMonth().toString();
let initialDay = d.getDate().toString();

let month = (initialMonth.length > 1) ? zero.concat(initialMonth) : initialMonth;
let date = (initialDay.length > 1) ? zero.concat(initialDay) : initialDay;

let currentDate = year.concat("-",month,"-",date,"&");

export const searchNews = query => dispatch => {
    dispatch({
        type: SEARCH_NEWS,
        payload: query
    })
};

export const fetchNews = query => dispatch => {
    let search = (encodeURI(query.toLowerCase().trim()) + "&");

    let url = (`https://newsapi.org/v2/everything?q=${search}from=${currentDate}sortBy=popularity&apiKey=9b942d5f77b34e51aac3d8975148928a`);
    const req = new Request(url);
    fetch(req)
        .then(res => res.json())
        .then(news => dispatch({
            type: FETCH_NEWS,
            payload: news.articles,
            error: news,
        })).then(news => console.log(news));
};

export const fetchArticle = article => dispatch => {
    dispatch({
        type: FETCH_ARTICLE,
        payload: article
    })
};

export const setLoading = () => {
    return {
        type: LOADING
    }
};

export const assignID = id => dispatch => {
    dispatch({
        type: ASSIGN_ID,
        payload: id
    })
};

export const updateArticles = items => dispatch => {
    dispatch({
        type: UPDATE_ARTICLES,
        payload: items
    })
};

export const fetchQuery = query => {
    return {
        type: FETCH_QUERY,
        payload: query
    }
};
