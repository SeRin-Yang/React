import './ExpandableListItem.css';

function ExpandableListItem({url, title}) {
  return (
    <li className='itemWrapper'>
      <h3>
        {title}
      </h3>
      <a href={url} className="more hide">more</a>
    </li>
  );
}

export default ExpandableListItem;
