import './ExpandableListItem.css';

function ExpandableListItem({index, clickEvent, title}) {
  return (
    <button type='button' className='buttonWrapper' onClick={clickEvent}>
      <span className='index'>
        {index}
      </span>
      <span className='title'>
        {title}
      </span>
    </button>
  );
}

export default ExpandableListItem;
