import React from 'react';
import { useSelector } from 'react-redux';
import { selectTableOpen } from '../store/tableOpenSlice';

function Table() {
  const tableOpen = useSelector(selectTableOpen);

  return <div className={`table ${tableOpen && 'open'}`} />;
}

export default Table;
