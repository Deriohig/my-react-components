import React from 'react';
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      totalItems: null,
      maxPerPage: 10,
      withNextPrevious:false,
      pageNumbers: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.getPageNumber = this.getPageNumber.bind(this);
    this.handleGoTo = this.handleGoTo.bind(this);
    this.generatePageNumbers = this.generatePageNumbers.bind(this);
  }
  generatePageNumbers(nextProps){
    const pageNumbers = [];
    const totalPages = nextProps.totalItems / nextProps.maxPerPage;
    //Loop over pages to generate our numbers for the pagination
    for (let i = 1; i <= Math.ceil(totalPages); i++) {
      // make sure there are never more than 7 numbers in a pagination set
      if(pageNumbers.length > 8){
        break;
      }
      // if there are more than 10 pages we dont want to populate the numbers with too many pages
      // We only populate the first, last, and 5 other numbers around the current page
      if(totalPages < 10 ||i === 1 || i === totalPages ){
        pageNumbers.push(i);
      }
      // only want 5 numbers around the current page
      else if(pageNumbers.length < 6){
        // push in the 2 numbers before and after current page as well as current page
        if( i - 3 < nextProps.currentPage && i + 3 > nextProps.currentPage){
         pageNumbers.push(i);
         //if we still havent populated the numbers to 5 we can push in more
       }else if(i > nextProps.currentPage){
         pageNumbers.push(i);
         // this extends the band of pages before the current page if we are at the end of the pagination
       }else if(totalPages - 5 <= i){
         pageNumbers.push(i);
       }
      }

    }
    this.setState({...nextProps, pageNumbers: pageNumbers, totalPages: totalPages});
  }
  componentWillReceiveProps(nextProps){
    this.generatePageNumbers(nextProps);
  }
  getPageNumber(event){
    this.setState({goToPage: event.target.value});
  }
  handleGoTo(event){
    event.preventDefault();
    this.props.returnCurrentPage(parseInt(this.state.goToPage));
  }
  handleClick(event){
    const toPage = event.target.getAttribute('data-number');
    // eslint-disable-next-line
    this.props.returnCurrentPage(parseInt(toPage));
  }
  render() {
    let startNumdots = '';
    let endNumDots = '';
    // check if we need to add [...] as an after or before element to the first and last number
    if(this.state.currentPage > 4 && this.state.totalPages > 10){
      startNumdots = 'pagination-dots-before';
    }
    if(this.state.currentPage < this.state.totalPages - 3 && this.state.totalPages > 10){
      endNumDots = 'pagination-dots-after'
    }
    return (
      <div className="react-pagination ">
          <ol className='react-pagination-list '>
            {this.state.withNextPrevious & this.state.currentPage !== 1 ?
              <li data-number={this.state.currentPage - 1} onClick={this.handleClick} className='react-pagination-previous'>Prev</li>:
              ''
             }
            {pageNumbers(this.state.pageNumbers, this.state.currentPage, this.handleClick, startNumdots, endNumDots, this.state.totalPages)}
            {this.state.withNextPrevious & this.state.currentPage !== this.state.totalPages ?
              <li data-number={this.state.currentPage + 1} onClick={this.handleClick} className='react-pagination-next'>Next</li>:
              ''
             }
          </ol>
          <form className='react-pagination-form' onSubmit={this.handleGoTo}>
            <span>Go To:</span>
            <input name='page' type='number' min='1' max={this.state.totalPages} onChange={this.getPageNumber} />
            <input type='submit' value="Go" />
          </form>
      </div>
    );
  }
}
const pageNumbers = (numbers , currentPage, handleClick, startNumdots, endNumDots, totalPages) => numbers.map(number => {
  let classNames = '';
  currentPage === number ? classNames += 'react-pagination-number current' : classNames += 'react-pagination-number ';
  number === 1 ? (classNames += startNumdots) : '';
  number === totalPages ? (classNames += endNumDots) : '';
  return(
    <li data-number={number} onClick={handleClick}  className={classNames} key={number} >
      {number}
    </li>
  )
})

export default Pagination;
