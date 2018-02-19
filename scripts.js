var Movie = React.createClass({
    propTypes: {
      film: React.PropTypes.object.isRequired,
    },


 
render: function() {
    return (
    React.createElement('div', {},
        React.createElement('h2', {}, this.props.film.title),
        React.createElement('p', {}, this.props.film.desc),
        React.createElement('img', {src: this.props.film.plakat})
    )
    )
},
});
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        plakat: "https://images-na.ssl-images-amazon.com/images/I/71pN7LlOKTL._SY686_.jpg"
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        plakat: "https://img1.etsystatic.com/119/0/12075072/il_570xN.934228597_2b8d.jpg"
    },
    {
        id: 3,
        title: 'Pan Wołodyjowski',
        desc: 'Film o Panu Wołodyjowskim',
        plakat: "http://i.iplsc.com/michal-zebrowski/0001ZIWPSYGCCPJK-C122-F4.jpg"
    },
    {
        id: 4,
        title: 'Wall-E',
        desc: 'Film o Robocie',
        plakat: "https://images-na.ssl-images-amazon.com/images/I/51RoZRgIHtL.jpg"
    }    
];
var hp = React.createElement(Movie, {film: movies[0]});
var kl = React.createElement(Movie, {film: movies[1]});
var pw = React.createElement(Movie, {film: movies[2]});
var we = React.createElement(Movie, {film: movies[3]});
var lista = React.createElement('ul', {}, hp, kl, pw, we);
ReactDOM.render(lista, document.getElementById('app'));