import React from "react";

const ListItem = (props) => {

  return (
    <li>
      { props.contact }
      { props.phone }
      <button
        type="button"
        onClick={ () => props.handleDel(props.id) }
      >
        Delete
      </button>
    </li>)
}

export default ListItem;