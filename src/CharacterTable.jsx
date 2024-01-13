import React, { useState } from 'react';
import Row from './Row';

const CharacterTable = ({ characters }) => {
  const [sortOrder, setSortOrder] = useState({ field: null, order: 'asc' });

  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    width: '80%',
    margin: 40,
  };

  const Tableheader =
   {
    cursor: 'pointer',
    borderBottom: '1px solid black',
  };

  const sortByField = (field) => {
    const order = sortOrder.field === field && sortOrder.order === 'asc' ? 'asc' : 'asc';

    return [...characters].sort((a, b) => {
      const valueA = field === 'name' ? a[field].toLowerCase() : parseFloat(a[field]);
      const valueB = field === 'name' ? b[field].toLowerCase() : parseFloat(b[field]);

      if (order === 'asc') {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueB < valueA ? -1 : 1;
      }
    });
  };

  const handleSortByField = (field) => {
    setSortOrder({ field, order: sortOrder.field === field ? (sortOrder.order === 'asc' ? 'desc' : 'asc') : 'asc' })
  
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={Tableheader} 
          onClick={() => handleSortByField('name')}>
            Name
          </th>
          <th style={Tableheader} 
          onClick={() => handleSortByField('height')}>
            Height
          </th>
          <th style={Tableheader} 
          onClick={() => handleSortByField('mass')}>
            Mass
          </th>
          <th style={Tableheader} >
            Hair Color
          </th>
          <th style={Tableheader} 
          onClick={() => handleSortByField('birth_year')}>
            Birth Year
          </th>
        </tr>
      </thead>
      <tbody>
        {sortByField(sortOrder.field).map((character) => (
          <Row key={character.url} character={character} />
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
