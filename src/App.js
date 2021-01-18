import React, { useState } from 'react';
import data from './data';

function App() {
 const [count, setCount] =useState(0)
 const [text,setText] = useState([]) 
  
 const handleSubmit = (e) => {
  e.preventDefault()
 }
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='amount'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam!</p>
      </article>
    </section>
  )
}

export default App;
