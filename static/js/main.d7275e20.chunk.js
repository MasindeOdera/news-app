(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{18:function(e,t,n){},28:function(e,t,n){e.exports=n.p+"static/media/spinner.bd0201f1.gif"},29:function(e,t,n){e.exports=n.p+"static/media/fakeNews.2230c16b.gif"},32:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),l=n(5),c=n(6),s=n(7),u=n(8),p=n(11),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.article,t=r.a.createElement("div",{style:m},r.a.createElement("div",{style:h,className:"Card"},r.a.createElement(p.b,{to:"/news/"+e.title},r.a.createElement("div",{style:f},r.a.createElement("img",{src:e.urlToImage,alt:"img",style:g}),r.a.createElement("h3",{style:{fontSize:"0.86rem"}},e.title),r.a.createElement("h4",{style:y},"- ",e.author),r.a.createElement("p",{style:E},e.description)))));return r.a.createElement(r.a.Fragment,null,t)}}]),n}(a.Component),m={color:"#000",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(8rem, 1fr))",gridGap:"1rem",justifyContent:"center",alignItems:"center",marginTop:"10px"},h={padding:"0rem 0px"},f={color:"#222",fontWeight:"500",textTransform:"capitalize",fontSize:"1.1rem",textAlign:"left",height:"310px",marginTop:"0px",backgroundColor:"#d9d9d9"},g={width:"100%",height:"10rem",objectFit:"cover"},y={margin:"2px",whiteSpace:"nowrap",width:"100%",overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.96rem"},E={whiteSpace:"nowrap",width:"100%",overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.86rem"},b=d,v=n(28),w=n.n(v);var O=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:w.a,style:{width:"200px",margin:"10px auto",display:"block"},alt:"Loading..."}))},j=n(29),S=n.n(j),x=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{style:{margin:"4px"}},"Fake news? Find out for yourself."),r.a.createElement("img",{src:S.a,style:{width:"60%",margin:"auto",display:"block"},alt:"Loading..."}))}}]),n}(a.Component),q=n(2),C=n.n(q),N=n(13),T=new Date,_=T.getFullYear().toString(),k=T.getMonth().toString(),R=T.getDate().toString(),A=k.length>1?"0".concat(k):k,I=R.length>1?"0".concat(R):R,L=_.concat("-",A,"-",I,"&"),D=function(){return{type:"LOADING"}},F=(n(18),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={news:a.props.news,id:a.props.id,landing:a.props.landing,query:a.query,loading:a.props.loading},a}return Object(c.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({landing:!0})}},{key:"componentDidMount",value:function(){this.setState({news:this.props.articles}),this.setState({id:this.props.news.id}),this.setState({landing:!1}),this.setState({query:this.props.query}),this.props.fetchQuery(this.props.query)}},{key:"render",value:function(){var e,t=this.props,n=t.news,a=t.query,i=t.loading,o=0!==n.length||i||0!==a.length?null:r.a.createElement(x,null);return e=n.length>0?n.map((function(e,t){return r.a.createElement(b,{key:t,article:e})})):null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{style:W},o,i?r.a.createElement(O,null):null,e)))}}]),n}(a.Component)),W={color:"#000",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(15rem, 1fr))",gridGap:"1rem",justifyContent:"center",alignItems:"center",margin:"auto"};F.prototypes={setLoading:C.a.func.isRequired,assignID:C.a.func.isRequired,fetchQuery:C.a.func.isRequired,news:C.a.array.isRequired,id:C.a.string.isRequired};var H=Object(N.b)((function(e){return{news:e.news.items,id:e.id,loading:e.news.loading,query:e.news.query}}),{setLoading:D,assignID:function(e){return function(t){t({type:"ASSIGN_ID",payload:e})}},fetchQuery:function(e){return{type:"FETCH_QUERY",payload:e}}})(F),U=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={article:a.props.article},a}return Object(c.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setLoading()}},{key:"componentDidMount",value:function(){var e=this.props.news;console.log(this.props.news);var t=function(t){return e.filter((function(e){return e.title===t}))}(this.props.match.params.id);this.props.setLoading(),this.props.fetchArticle(t[0]),this.setState({article:t[0]})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.loading,t=this.state.article;var n=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/"},r.a.createElement("span",null,"Back")),r.a.createElement("div",{style:z,className:"Card"},r.a.createElement("div",{style:G},r.a.createElement("img",{src:t.urlToImage,alt:"img",style:M}),r.a.createElement("h3",null,t.title),r.a.createElement("h4",{style:Q},"- ",t.author),r.a.createElement("p",{style:X},t.content),r.a.createElement(p.b,{to:"/",onClick:function(){window.open(t.url)}},r.a.createElement("input",{type:"submit",value:"Original Article",className:"btn",style:{flex:"1",fontSize:"8",marginTop:"10px"}}))))),a=e?r.a.createElement(O,null):n;return r.a.createElement(r.a.Fragment,null,a)}}]),n}(a.Component),z={padding:"1.2rem 10px",marginTop:"20px",height:"auto"},G={color:"#222",fontWeight:"500",textTransform:"capitalize",fontSize:"1.1rem",textAlign:"left",padding:"0.2rem",marginTop:"-20px",height:"inherit"},M={width:"100%",height:"14rem",objectFit:"cover"},Q={margin:"2px",width:"100%"},X={width:"80%"};U.prototypes={fetchArticle:C.a.func.isRequired,setLoading:C.a.func.isRequired,news:C.a.array.isRequired,article:C.a.array.isRequired};var B=Object(N.b)((function(e){return{loading:e.news.loading,news:e.news.items,article:e.news.article}}),{fetchArticle:function(e){return function(t){t({type:"FETCH_ARTICLE",payload:e})}},setLoading:D})(U),Y=n(16),J=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={query:a.query,article:a.props.article},a.timeout=0,a.handleChange=a.handleChange.bind(Object(Y.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Y.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){var t=this;e.preventDefault(),this.props.searchNews(e.target.value),this.props.setLoading();var n=e.target.value;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.props.fetchNews(n)}),600)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.fetchNews(this.props.query),this.props.setLoading()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:{display:"flex"},onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Search for news article...",style:{flex:"10",padding:"5px"},value:this.state.search,onChange:this.handleChange,autoComplete:"off"}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn",style:{flex:"1"}})))}}]),n}(a.Component);J.protoTypes={fetchNews:C.a.func.isRequired,searchNews:C.a.func.isRequired,setLoading:C.a.func.isRequired};var P=Object(N.b)((function(e){return{query:e.news.query}}),{fetchNews:function(e){return function(t){var n=encodeURI(e.toLowerCase().trim())+"&",a="https://newsapi.org/v2/everything?q=".concat(n,"from=").concat(L,"sortBy=popularity&apiKey=9b942d5f77b34e51aac3d8975148928a"),r=new Request(a);fetch(r).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_NEWS",payload:e.articles})})).then((function(e){return console.log(e)}))}},searchNews:function(e){return function(t){t({type:"SEARCH_NEWS",payload:e})}},setLoading:D})(J),V=n(15),K=n(14),Z=n(31),$=n(12),ee={query:"",items:[],item:{},article:[],loading:!1,id:[]},te=Object(K.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NEWS":return Object($.a)({},e,{items:t.payload,loading:!1,id:e.id});case"FETCH_NEWS":return Object($.a)({},e,{items:t.payload,query:e.query,loading:!1,id:e.id});case"FETCH_ARTICLE":return Object($.a)({},e,{article:t.payload,loading:!1});case"SEARCH_NEWS":return Object($.a)({},e,{query:t.payload,loading:!1});case"LOADING":return Object($.a)({},e,{loading:!0});case"ASSIGN_ID":return Object($.a)({},e,{id:t.payload,loading:!1});case"UPDATE_ARTICLES":return Object($.a)({},e,{items:t.payload,loading:!1});case"FETCH_QUERY":return Object($.a)({},e,{query:t.payload});default:return e}}}),ne=[Z.a],ae=Object(K.e)(te,{},Object(K.d)(K.a.apply(void 0,ne),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(N.a,{store:ae},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"News API"),r.a.createElement(V.a,{exact:!0,path:"/",component:P}),r.a.createElement(V.a,{exact:!0,path:"/",component:H}),r.a.createElement(V.a,{exact:!0,path:"/news/:id",component:B}))))}}]),n}(a.Component);o.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d7275e20.chunk.js.map