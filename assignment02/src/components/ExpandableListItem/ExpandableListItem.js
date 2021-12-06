import './ExpandableListItem.css';

function ExpandableListItem() {
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
