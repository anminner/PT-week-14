import React from 'react';
import MovieList from './MovieList';
import './App.css';

function App() {
  // Sample data for movies
  const movies = [
    {
      id: 1,
      title: 'Love Jones',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI-Scy6_fyxyfabLsliLeePRkDnkITETYn99QyU12I-DwcfkTa',
      synopsis: 'Two young Chicagoans, Darius, an aspiring writer, and Nina, an aspiring photographer are trying to figure out if it is love or if they are just kickin it...',
      rating: 4,
      reviews: [
        { id: 1, user: 'User1', comment: 'Great love story!' },
        { id: 2, user: 'User2', comment: 'Really enjoyed it!' }
      ]
    },
    {
      id: 2,
      title: 'The Wizard of Oz',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyFbip3250PGp3m4a5V2tCbWuo5gWqU0UMAMnV9v-OQmuWIRYM',
      synopsis: 'Young Dorothy and her dog, Toto, are swept away by a tornado from their Kansas farm to the magical Land of Oz...',
      rating: 3,
      reviews: [
        { id: 3, user: 'User3', comment: 'Not bad for an old movie.' },
        {id: 4, user: 'User4', comment: 'The flying monkeys are so scary!'}
      ]
    }
  ];
  

  return (
    <div className="App">
      <h1>Movie Voting and Reviews</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;


