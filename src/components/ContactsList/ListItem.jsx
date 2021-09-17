import React from "react";

const ListItem = (props) => {

  const handleDel = () => props.handleDel(props.id);

  return (
    <li>
      { props.contact }
      { props.phone }
      <button
        type="button"
        onClick={ handleDel }
      >
        Delete
      </button>
    </li>)
}

export default ListItem;