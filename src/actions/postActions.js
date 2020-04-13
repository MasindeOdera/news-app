import { SHOW_NEWS, FETCH_NEWS, SEARCH_NEWS, FETCH_ARTICLE, LOADING, ASSIGN_ID } from './types';

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

export const showNews = () => dispatch => {
    let query = 'Apple&';

    let url = `https://newsapi.org/v2/everything?q=${query}from=${currentDate}sortBy=popularity&apiKey=cc9b54067d074fc88253847971a703eb`;
    const req = new Request(url);
    fetch(req)
        .then(res => res.json())
        .then(news => dispatch({
            type: SHOW_NEWS,
            payload: news.articles,
            query: query
        })).then(articles => console.log(articles));
};

export const searchNews = query => dispatch => {
    dispatch({
        type: SEARCH_NEWS,
        payload: query
    })
};

export const fetchNews = query => dispatch => {
    let search = (query.toLowerCase() + "&");

    let url = (`https://newsapi.org/v2/everything?q=${search}from=${currentDate}sortBy=popularity&apiKey=cc9b54067d074fc88253847971a703eb`);
    const req = new Request(url);
    fetch(req)
        .then(res => res.json())
        .then(news => dispatch({
            type: FETCH_NEWS,
            payload: news.articles,
        })).then(articles => console.log(articles));
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
