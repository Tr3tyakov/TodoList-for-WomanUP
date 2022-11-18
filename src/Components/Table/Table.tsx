import React from 'react';
import Box from '../Elements/Box/Box';
import { useAppSelector } from '../Hooks/useTypeSelector';
import './table.scss';
import TableRow from './TableRow/TableRow';
import { theme } from '../Theme/theme';

const tableHeader = [
  '№',
  'Task',
  'Date of Creation',
  'Date of Completion',
  'Status ',
  'Edit',
  'Delete',
  'Details',
];

const Table = () => {
  const state = useAppSelector((state) => state);

  return (
    <Box
      m="10px 0"
      backgroundColor={theme.palette.white}
      boradius="4px"
      overflow="hidden"
      box-shadow="2px 2px 2px 2px rgba(0, 0, 0, 0.19)">
      <table width="100%" cellPadding="8px" cellSpacing="0px">
        <thead>
          <tr>
            {tableHeader.map((title, index) => (
              <td width={index === 1 ? '23%' : ''} key={title}>
                {title}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.map((element) => (
            <TableRow key={element.id} element={element} />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
