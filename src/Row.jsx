import React from 'react';

const Row = ({ character }) => {
  const rowStyle = {
    border: '1px solid black',
    height: '30px',  
  };
 return (
    <tr style={rowStyle}>
      <td style={rowStyle}>{character.name}</td>
      <td style={rowStyle}>{character.height}</td>
      <td style={rowStyle}>{character.mass}</td>
      <td style={rowStyle}>{character.hair_color}</td>
      <td style={rowStyle}>{character.birth_year}</td>
    </tr>
  );
};
export default Row;
