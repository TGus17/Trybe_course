import React, { Component } from 'react';

class DogRandom extends Component {

  constructor() {
    super();
    this.state = {
      dogs: {},
      loading: true,
    }
    this.fetchDog = this.fetchDog.bind(this);
  }

  fetchDog() {
    this.setState({ loading: true },
      () => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => this.setState({
            dogs: data,
            loading: false
          }))
      })
  }

  renderImagePlusButton(url) {
    return (
      <div>
        <div>
          <img src={url} alt={url} />
        </div>
        <div>
          <button onClick={this.fetchDog}>New Dog</button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { loading, dogs: { message } } = this.state;
    const loadingElement = <span>Loading...</span>
    return (
      <span>
        {loading ? loadingElement : this.renderImagePlusButton(message)}
      </span>
    );
  }
}

export default DogRandom;
