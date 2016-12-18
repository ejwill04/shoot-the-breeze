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
          onClick={ () => {this.sortMessages() }}
          >Sort Up
        </button>
        <button
          className='sort-btn sort-reverse-chrono-btn'
          onClick={ () => {this.sortMessages() }}
          >Sort Down
        </button>
      </div>
    )
  }
}
