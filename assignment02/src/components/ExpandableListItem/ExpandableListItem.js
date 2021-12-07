import './ExpandableListItem.css';

function ExpandableListItem({index, clickEvent, title}) {
  return (
    <div className='itemWrapper'>
      <div className='index'>
        {index}
      </div>
      <div className='titleAndMore'>
        <div>
          {title}
        </div>
        <button className='hide' type='button' onClick={clickEvent}> more </button>
      </div>
    </div>
  );
}

export default ExpandableListItem;
