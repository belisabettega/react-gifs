import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "WsWuvZCICpsXPoYOM2/200w.webp?cid=ecf05e47bccpa8b9nuz3ld3kxm3gm34n922teu3vu69fpr11&rid=200w.webp&ct=g"
    }

    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy('6JyPYvsDhj4uG7NmhIG495y1OL8FHVNm').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
