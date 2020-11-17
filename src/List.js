import React from 'react';

const List = ({ people }) => {
  const birthdaylist = people.map((person) => {
    const { image, name, id, age } = person;
    return (
      <article className="person">
        <img src={image} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    );
  });

  return <>{birthdaylist}</>;
};

export default List;
