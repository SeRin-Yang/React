import React, { useState } from 'react';
import './ExpandableListItem.css';

const ExpandableListItem = ({index, url, title}) => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const className = hovered ? 'more' : 'more hide';

  return (
    <li className='itemWrapper' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className='titleWrapper'>
        <span className='index'>
          {index}
        </span>
        <h3 className='title'>
          {title}
        </h3>
      </div>
      <a href={url} className={className}>more</a>
    </li>
  );
}

export default ExpandableListItem;
