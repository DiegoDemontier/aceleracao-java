import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <Box className="load">
      <Skeleton height={40}/>
      <Skeleton height={40}/>
      <Skeleton height={40}/>
      <Skeleton height={40}/>
      <Skeleton height={40} animation="wave"/>
      <Skeleton height={40} animation={false}/>
    </Box>
  );
}
