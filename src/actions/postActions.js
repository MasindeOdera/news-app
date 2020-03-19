import { SHOW_NEWS, FETCH_NEWS, SEARCH_NEWS } from './types';

export const showNews = () => dispatch => {
    //Created currentDate to be able to still get the latest data with my developer's plan at News API.
    let date;
    let month;
    let zero = "0";
    let d = new Date();
    let year = d.getFullYear().toString();
    let initialMonth = d.getMonth().toString();
    let initialDay = d.getDate().toString();

    if(initialMonth.length > 1){
        month = zero.concat(initialMonth);
    }
    else {
        month = initialMonth;
    }

    if(initialDay.length > 1){
        date = zero.concat(initialDay);
    }
    else {
        date = initialDay;
    }

    let currentDate = year.concat("-",month,"-",date,"&");

    let query = 'Apple&';

    let url = `https://newsapi.org/v2/everything?q=${query}from=${currentDate}sortBy=popularity&apiKey=cc9b54067d074fc88253847971a703eb`;
    console.log(query);
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
    let date;
    let month;
    let zero = "0";
    let d = new Date();
    let year = d.getFullYear().toString();
    let initialMonth = d.getMonth().toString();
    let initialDay = d.getDate().toString();

    if(initialMonth.length > 1){
        month = zero.concat(initialMonth);
    }
    else {
        month = initialMonth;
    }

    if(initialDay.length > 1){
        date = zero.concat(initialDay);
    }
    else {
        date = initialDay;
    }

    let currentDate = year.concat("-",month,"-",date,"&");

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
