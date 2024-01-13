import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import CharacterTable from './CharacterTable';
import PaginationButtons from './PaginationButtons';

const Test_Task = () => {
  const [rowData, setRowdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [sortOrder, setSortOrder] = useState({ field: null, order: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const data = await response.json();
        setRowdata(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        console.log('times');
      }
       catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const sortByField = (field) => {
    const order = sortOrder.field === field && sortOrder.order === 'asc' ? 'asc' : 'asc';

    const sortedCharacters = [...rowData].sort((a, b) => {
      const valueA = field === 'name' ? a[field].toLowerCase() : parseFloat(a[field]);
      const valueB = field === 'name' ? b[field].toLowerCase() : parseFloat(b[field]);
      
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);

    });

    setRowdata(sortedCharacters);
    setSortOrder({ field, order });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(event.target.value.toLowerCase());
  };

  const filteredCharacters = rowData.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>TEST TASK</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CharacterTable characters={filteredCharacters} sortByField={sortByField} />
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={previousPage}
        onNextPage={nextPage}
      />
    </div>
  );
};

export default Test_Task;
