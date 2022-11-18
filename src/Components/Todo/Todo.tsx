import React from 'react';
import Box from '../Elements/Box/Box';
import Button from '../Elements/Button/Button';
import Typography from '../Elements/Typography/Typography';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
import { theme } from '../Theme/theme';

const Todo = () => {
  const [modal, setModal] = React.useState<boolean>(false);

  const changeActiveModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal active={modal} changeActiveModal={changeActiveModal} />
      <Box width="100wh" height="100vh" display="flex" justify="center" align="center">
        <Box>
          <Box>
            <Typography fontSize="35px" fontWeight={600}>
              TODO List of your App
            </Typography>
            <Box display="flex" justify="space-between">
              <Box
                p="5px 5px"
                backgroundColor={theme.palette.yellow.primary}
                boradius="5px"
                width="max-content">
                <Typography fontSize="15px" fontWeight={500}>
                  Just DO IT now.
                </Typography>
              </Box>
              <Button onClick={() => changeActiveModal()}>Create new Tusk</Button>
            </Box>
            <Table />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Todo;
