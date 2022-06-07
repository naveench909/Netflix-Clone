import './App.css';
import Row from './components/Row';
import Banner from './components/Banner'
import request from './request';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
