import React from 'react'

export default class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  inputField(e) {
    this.setState({ input: e.target.value })
  }

  // sortReverseChronologically() {
  //   this.props.messagesArray.sort((a, b) => {
  //     if (a.id > b.id) {
  //       return 1;
  //     } else if (a.id < b.id) {
  //       return -1;
  //     } return 0;
  //   });
  //   this.setState({ messagesArray: this.state.messagesArray })
  // }
  //
  // sortChronologically() {
  //   const array = this.props.messagesArray;
  //   array.sort((a, b) => {
  //     if (a.id < b.id) {
  //       return 1;
  //     } else if (a.id > b.id) {
  //       return -1;
  //     } return 0;
  //   });
  //   console.log(array);
  // }

  render() {
    return (
      <div className='filter-bar'>
        <h1 className='app-name'>Shoot Thou Breeze</h1>
        <input
          type='text'
          placeholder='Filter'
          value={this.state.input}
          onChange={(e) => { this.inputField(e) }}
        />
        <button
          className='sort-btn sort-chrono-btn'
          onClick={ () => { this.props.handleReverse() }}
          >Sort Up
        </button>
        <button
          className='sort-btn sort-reverse-chrono-btn'
          onClick={ () => { this.props.handleReverse() }}
          >Sort Down
        </button>
      </div>
    )
  }
}
