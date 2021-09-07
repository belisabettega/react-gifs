import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src=`https://media2.giphy.com/media/${this.props.id}/200w.gif`;
    return(
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;