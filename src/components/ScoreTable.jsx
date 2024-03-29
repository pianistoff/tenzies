import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { selectTableOpen } from '../store/tableOpenSlice';
import { selectTableData } from '../store/tableDataSlice';
import formatTime from '../formatTime';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    title: 'Rolls Count',
    dataIndex: 'rollsCount',
    sorter: (a, b) => a.rollsCount - b.rollsCount,
  },
  {
    title: 'Time',
    dataIndex: 'time',
    sorter: (a, b) => formatTime(a.time, 'ms') - formatTime(b.time, 'ms'),
  },
];

function ScoreTable() {
  const tableOpen = useSelector(selectTableOpen);
  const tableData = useSelector(selectTableData);

  return (
    <div className={`table ${tableOpen && 'open'}`}>
      <Table
        columns={columns}
        dataSource={tableData.record.concat(tableData.temporary)}
      />
    </div>
  );
}

export default ScoreTable;
