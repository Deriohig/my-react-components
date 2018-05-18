import React from 'react';

import BasicModelBox from './components/BasicModelBox';
import Pagination from './components/Pagination';
import './App.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false,
      images: [],
      currentPage: 1,
      maxPerPage: 5
    };
    this.fetchData = this.fetchData.bind(this);
    this.openModel = this.openModel.bind(this);
    this.onClose = this.onClose.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }
  openModel() {
    this.setState({modelOpen: true})
  }
  onClose() {
    this.setState({modelOpen: false})
  }
  fetchData() {
    fetch('https://pixabay.com/api/?key=8969473-469ffa91197fd47b2b9f58e37&q=code&image_type=photo&per_page=200', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {
      const hits = responseJson.hits;
      const images = [
        ...hits
      ];
      this.setState({
        images: images
      });
      return;
    }).catch((error) => {
      console.error(error);
    });
  }

  getCurrentPage(newPageNumber) {
    this.setState({currentPage: newPageNumber});
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {

    const endPos = this.state.currentPage * this.state.maxPerPage;
    const startPos = endPos - this.state.maxPerPage;
    const newImages = [...this.state.images];
    const filteredImages = newImages.slice(startPos , endPos);
    return (
      <div style={styles}>
        <h2>Click Below to open the basic model box. {"\u2728"}</h2>
        <button onClick={this.openModel}>Activate ModelBox</button>
        {this.state.modelOpen
          ? <BasicModelBox onClose={this.onClose}>
              <p>
                more content thats wrapped in more content thats wrapped in more content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped inmore content thats wrapped in
              </p>
            </BasicModelBox>
          : ''}
        <div className='pagination-holder'>
          <Pagination
            totalItems={this.state.images.length}
            maxPerPage={this.state.maxPerPage}
            currentPage={this.state.currentPage}
            withNextPrevious={true}
            returnCurrentPage={this.getCurrentPage}
            />
          {
             filteredImages.map( (image,index) => {
               return <img alt={image.tags} key={index} src={image.previewURL}></img>
             })
           }

        </div>
      </div>
    )
  }
}

export default App;
