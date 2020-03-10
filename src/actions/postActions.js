import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    //Created currentDate to be able to still get the latest data with my developer's plan at News API.
    var date;
    var month;
    var zero = "0";
    var d = new Date();
    var year = d.getFullYear().toString();
    var initialMonth = d.getMonth().toString();
    var initialDay = d.getDate().toString();

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

    var currentDate = year.concat("-",month,"-",date,"&");

    var query = 'Apple&';

    var url = 'https://newsapi.org/v2/everything?' +
            'q=' + query +
            'from=' + currentDate +
            'sortBy=popularity&' +
            'apiKey=cc9b54067d074fc88253847971a703eb';
    var req = new Request(url);
    fetch(req)
        .then(res => res.json())
        .then(news => dispatch({
            type: FETCH_POSTS,
            payload: news.articles
        }));
};

// export const searchPosts = () => dispatch => {
//     console.log('search called');
//     var url = 'https://newsapi.org/v2/everything?' +
//             'q=Apple&' +
//             'from=2020-02-21&' +
//             'sortBy=popularity&' +
//             'apiKey=cc9b54067d074fc88253847971a703eb';
//     var req = new Request(url);
//     fetch(req)
//         .then((res) => res.json())
//         .then(news => dispatch({
//             type: NEW_POST,
//             payload: news
//         }));
// }
