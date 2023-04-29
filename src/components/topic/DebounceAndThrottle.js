import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { Box, TextField } from '@mui/material';

function DebounceAndThrottle() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceCallCount, setDebounceCallCount] = useState(0);
  const [throttleCallCount, setThrottleCallCount] = useState(0);

  const handleSearch = useCallback((value, type) => {
    if (type === 'debounce') {
      setDebounceCallCount((count) => count + 1);
    } else if (type === 'throttle') {
      setThrottleCallCount((count) => count + 1);
    }
  }, []);

  const handleSearchDebounced = useCallback(
    debounce(handleSearch, 500),
    [handleSearch]
  );

  const handleSearchThrottled = useCallback(
    throttle(handleSearch, 500),
    [handleSearch]
  );

  const handleInputChange = useCallback((event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearchDebounced(value, 'debounce');
    handleSearchThrottled(value, 'throttle');
  }, [handleSearchDebounced, handleSearchThrottled]);

  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField
        fullWidth
        label="Search"
        id="Search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <p>{`Normal Call: ${searchTerm.length}`}</p>
      <p>{`Throttle Call Count: ${throttleCallCount}`}</p>
      <p>{`Debounce Call Count: ${debounceCallCount}`}</p>
    </Box>
  );
}

export default React.memo(DebounceAndThrottle);