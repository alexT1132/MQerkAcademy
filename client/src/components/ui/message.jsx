import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function Message({ message }) {
  return (
    <Stack sx={{ width: '100%' }}>
      <Alert variant="filled" severity="error" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {message}
      </Alert>
    </Stack>
  );
}
