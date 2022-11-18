import React from 'react';
import Box from '../../Elements/Box/Box';
import Typography from '../../Elements/Typography/Typography';
import { useLocation } from 'react-router-dom';
import { IElement } from '../../Store/Reducers/state';
import { NavLink as Link } from 'react-router-dom';
import Input from '../../Elements/Input/Input';
import { createCorrectionFormatForInput } from '../../Modal/modal.functions';
import { useAppDispatch } from '../../Hooks/useTypeSelector';
import { changeCompletionDate, changeCurrentRow } from '../../Store/Reducers/tableReducer';
import './currentTodo.scss';

import UploadFile from '../../UploadFile/UploadFile';
import Button from '../../Elements/Button/Button';

interface IState {
  locationTask: string;
  locationAbout: string;
  locationCompletionDate: string | null;
  locationFile: {
    url: string;
    image: string;
  };
}

const CurrentTodo = () => {
  const location = useLocation();
  const { task, about, id, completionDate, createDate, file }: IElement = location.state;
  const [state, setState] = React.useState<IState>({
    locationTask: task,
    locationCompletionDate: completionDate,
    locationAbout: about,
    locationFile: {
      url: '',
      image: file.image,
    },
  });

  console.log(location);
  const dispatch = useAppDispatch();

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.currentTarget.value).toLocaleDateString('ru-RU');
    setState({ ...state, locationCompletionDate: newDate });
    dispatch(changeCompletionDate({ id, date: newDate }));
  };

  const changeFile = (event: any) => {
    if (event.target.files[0]) {
      const value = event.target.files[0];
      const blob = URL.createObjectURL(value);
      setState({ ...state, locationFile: { url: event.target.value, image: blob } });
    }
  };

  const changeAbout = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, locationAbout: e.currentTarget.value });
  };

  const saveChanges = () => {
    const newInfo = {
      task: state.locationTask,
      about: state.locationAbout,
      file: state.locationFile,
      completionDate: state.locationCompletionDate,
    };
    dispatch(changeCurrentRow({ id, newInfo }));
  };

  return (
    <Box width="100wh" height="100vh" display="flex" justify="center" align="center">
      <Box p="10px" backgroundColor="white" boradius="4px">
        <Box>
          <Typography gutterButtom>
            <Link className="text__decoration--disabled" to={'/'}>
              Todo List
            </Link>
            &nbsp;/&nbsp;
            <Typography color="black" component="span" className="todo__current">
              Current Todo
            </Typography>
          </Typography>
        </Box>
        <Typography gutterButtom fontSize="35px" fontWeight={600}>
          {task}
        </Typography>
        <Box>
          <textarea
            className="todo__textarea"
            value={state.locationAbout}
            onChange={(e) => changeAbout(e)}></textarea>
        </Box>
        <Box display="flex" gap="10px" flexDirection="column">
          <Box>
            <Typography gutterButtom color="black" fontSize="16px" fontWeight={600}>
              Creation Date
            </Typography>
          </Box>
          <Typography>{createDate}</Typography>
          <Box>
            <Typography gutterButtom color="black" fontSize="16px" fontWeight={600}>
              Completion Date
            </Typography>
          </Box>
          <Input
            className="date"
            type="date"
            value={createCorrectionFormatForInput(state.locationCompletionDate)}
            onChange={(e) => changeDate(e)}
          />
          <UploadFile file={state.locationFile} changeFile={changeFile} />
          <Box>
            <Link className="text__decoration--disabled" to={'/'}>
              <Button className="todo__current__button" onClick={saveChanges}>
                Save
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentTodo;
