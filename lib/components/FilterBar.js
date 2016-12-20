import React from 'react';

export default class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  startSearching(e) {
    this.setState({ search: e }, () => {
      this.props.handleSearch(this.state.search);
    });
  }

  render() {
    return (
      <div className='filterBar'>
        <h1 className='appName'>Shoot Thou Breeze</h1>
        <input
          className='searchInput'
          type='text'
          placeholder='Filter'
          value={this.state.search}
          onChange={(e) => { this.startSearching(e.target.value); }}
        />
        <button
          className='sortBtn sortChronoBtn'
          onClick={ () => { this.props.handleSort('down'); }}
          >Sort &#8593;
        </button>
        <button
          className='sortBtn sortReverseChronoBtn'
          onClick={ () => { this.props.handleSort('up'); }}
          >Sort &#8595;
        </button>
      </div>
    );
  }
}
