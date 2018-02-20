var Movie = React.createClass({
    propTypes: {
      film: React.PropTypes.object.isRequired,
    },


 
render: function() {
    return (
    React.createElement('li', {key: this.props.film.id},
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
    },
    {
        id: 5,
        title: 'Ace Ventura',
        desc: 'Film o detektywie ratującym zwierzęta',
        plakat: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzNTI0ODUxOF5BMl5BanBnXkFtZTgwNTQxNzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
];
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    
    render: function() {
      return React.createElement('h2', {}, this.props.title);
    }
});
    
  var MovieDescription = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired
    },
  
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});
  
  var Movie = React.createClass({
    propTypes: {
        film: React.PropTypes.object.isRequired
    },
    
    render: function() {
      return (
        React.createElement('li', {},
                            React.createElement(MovieTitle, {title: this.props.film.title}),
                            React.createElement(MovieDescription, {desc: this.props.film.desc}),
                            React.createElement('img', {src: this.props.film.plakat})
                           )
      );
    }
  });
  var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    render: function() {
        var moviesList = this.props.movies.map(movie => {
            return React.createElement(Movie, {film: movie, key: movie.id});
        });
          
        return React.createElement('ul', {}, moviesList);
        }
    });
  
  var element =
      React.createElement('div', {},
                          React.createElement('h1', {}, 'Lista filmów'),
                          React.createElement(MoviesList, {movies: movies})
                         );
  
ReactDOM.render(element, document.getElementById('app'));