import React from 'react';
import './skill.css';

const SkillDataProvider = () => {
  return (
    <div className='skill'>
      <ul>
        <div className='ilk'>
        <li>
          <h3 className='text'>HTML</h3>
          <span className='bar'><span className='html'></span></span>
        </li>
        <li>
          <h3 className='text'>CSS</h3>
          <span className='bar'><span className='css'></span></span>
        </li>
        <li>
          <h3 className='text'>JS</h3>
          <span className='bar'><span className='js'></span></span>
        </li>
        <li>
          <h3 className='text'>REACT</h3>
          <span className='bar'><span className='React'></span></span>
        </li>

        </div>
        <div className='iki'>
        <li>
          <h3 className='text'>NODE</h3>
          <span className='bar'><span className='Node'></span></span>
        </li>
        <li>
          <h3 className='text'>NEXT</h3>
          <span className='bar'><span className='Next'></span></span>
        </li>
        <li>
          <h3 className='text'>LINUX</h3>
          <span className='bar'><span className='linux'></span></span>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default SkillDataProvider;
