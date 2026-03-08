import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #3d3d3d',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#202020',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ color: '#fff' }}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#FC1503' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;