import React, { useState } from 'react';
import './ExpandableListItem.css';

function ExpandableListItem({url, title}) {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  return (
    <li className='itemWrapper' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <h3>
        {title}
      </h3>
      <a href={url} className={hovered ? 'more' : 'more hide'}>more</a>
    </li>
  );
}

export default ExpandableListItem;
