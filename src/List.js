import React from 'react';

function ListItem(props) {
  return (
    <div className="list-item">
      <h4>{props.name}</h4>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <a className="btn-primary" href="#">
        Detail
      </a>
    </div>
  );
}

function List(props) {
    return (
      <>
        <div className="list">
          {props.data.map(function (item) {
            return (
              <ListItem
                key={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                username={item.username}
                website={item.website}
              />
            );
          })}
        </div>
      </>
    );  
}

export default List;