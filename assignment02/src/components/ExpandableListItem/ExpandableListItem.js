import './ExpandableListItem.css';

function ExpandableListItem({index, clickEvent, title}) {
  return (
    <div className='itemWrapper'>
      <span className='index'>
        {index}
      </span>
      <div className='titleAndMore'>
        <div>
          {title}
        </div>
        <button className='hide' type='button' onClick={clickEvent}>more</button>
      </div>
    </div>
  );
}

export default ExpandableListItem;
