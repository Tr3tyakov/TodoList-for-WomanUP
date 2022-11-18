import React from 'react';
import Box from '../Elements/Box/Box';
import Typography from '../Elements/Typography/Typography';
import ReactDOM from 'react-dom';
import Input from '../Elements/Input/Input';
import './modal.scss';
import { INewElement } from '../Store/Reducers/state';
import Button from '../Elements/Button/Button';
import { addTask } from '../Store/Reducers/tableReducer';
import { useAppDispatch } from '../Hooks/useTypeSelector';
import { createCorrectionFormatForInput } from './modal.functions';
import UploadFile from '../UploadFile/UploadFile';

interface IWindow {
  active: boolean;
  changeActiveModal: () => void;
}

const Modal: React.FC<IWindow> = ({ active, changeActiveModal }): any => {
  const [newTask, setNewTask] = React.useState<INewElement>({
    task: '',
    about: '',
    createDate: new Date().toLocaleDateString('ru-RU'),
    completionDate: null,
    status: false,
    edit: false,
    remove: false,
    file: {
      url: '',
      image: '',
    },
  });

  const dispatch = useAppDispatch();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, task: e.currentTarget.value });
  };

  const changeAbout = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({ ...newTask, about: e.currentTarget.value });
  };
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      completionDate: new Date(e.target.value).toLocaleDateString('ru-RU'),
    });
  };

  const createNewTask = () => {
    dispatch(addTask(newTask));
    changeActiveModal();
    setNewTask({
      task: '',
      about: '',
      createDate: new Date().toLocaleDateString('ru-RU'),
      completionDate: null,
      status: false,
      edit: false,
      remove: false,
      file: {
        url: '',
        image: '',
      },
    });
  };

  const changeFile = (event: any) => {
    if (event.target.files[0]) {
      const value = event.target.files[0];
      const blob = URL.createObjectURL(value);
      setNewTask({ ...newTask, file: { url: event.target.value, image: blob } });
    }
  };

  if (active) {
    return ReactDOM.createPortal(
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        height="100vh"
        display="flex"
        justify="center"
        align="center"
        backgroundColor="rgba(0, 0, 0, 0.50)"
        onClick={changeActiveModal}>
        <Box
          backgroundColor="white"
          width="60%"
          height="60%"
          p="20px"
          boradius="4px"
          onClick={(e) => e.stopPropagation()}
          display="flex"
          justify="space-between"
          flexDirection="column">
          <Box>
            <Typography gutterButtom fontSize="35px" fontWeight={600}>
              Create Your Todo
            </Typography>
            <Box m="0 0 8px 0">
              <Typography gutterButtom>Title</Typography>
              <Input
                onChange={(e) => changeTitle(e)}
                value={newTask.task}
                fontSize="16px"
                variant="primary"
                fullWidth></Input>
            </Box>
            <Box m="0 0 8px 0">
              <Typography gutterButtom>About</Typography>
              <textarea
                onChange={(e) => changeAbout(e)}
                value={newTask.about}
                className="textarea"></textarea>
            </Box>
            <Box m="0 0 8px 0">
              <Typography gutterButtom>Date before task completion</Typography>
              <Input
                type="date"
                className="date"
                onChange={(e) => changeData(e)}
                value={
                  newTask.completionDate === null
                    ? ''
                    : createCorrectionFormatForInput(newTask.completionDate)
                }
                fontSize="16px"
                variant="primary"></Input>
            </Box>
          </Box>
          <UploadFile file={newTask.file} changeFile={changeFile} />
          <Box>
            <Button
              className="modal__button"
              onClick={() => {
                createNewTask();
              }}>
              Create New Task
            </Button>
          </Box>
        </Box>
      </Box>,
      document.getElementById('root') as HTMLElement,
    );
  }
};

export default Modal;
