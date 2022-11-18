import React from 'react';
import { IElement } from '../../Store/Reducers/state';
import trash from '../../../images/trash.svg';
import cross from '../../../images/cross.svg';
import check from '../../../images/check.svg';
import edit from '../../../images/edit.svg';
import back from '../../../images/back.svg';
import Input from '../../Elements/Input/Input';
import { useAppDispatch } from '../../Hooks/useTypeSelector';
import { NavLink as Link } from 'react-router-dom';
import { checkTaskTime } from './tableRow.functions';
import {
  changeEdit,
  changeStatusRow,
  changeTitleTask,
  removeTask,
} from '../../Store/Reducers/tableReducer';
import './tableRow.scss';

interface ITableRow {
  element: IElement;
}

const TableRow: React.FC<ITableRow> = React.memo(({ element }) => {
  const isEdit = element.edit;
  const isSuccess = element.status;

  const dispatch = useAppDispatch();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitleTask({ id: element.id, task: e.currentTarget.value }));
  };

  const changeRowEdit = () => {
    dispatch(changeEdit(element.id));
  };

  const deleteCurrentTask = () => {
    dispatch(removeTask(element.id));
  };

  const changeStatus = () => {
    dispatch(changeStatusRow(element.id));
  };

  const isTimeOut = checkTaskTime(new Date(), element.completionDate);

  return (
    <tr className={isTimeOut ? 'table__row--disabled' : ''}>
      <td>{element.id}</td>
      <td onDoubleClick={changeRowEdit}>
        {isEdit ? (
          <form onSubmit={changeRowEdit}>
            <Input
              fontSize="16px"
              fontFamily='"Montserrat", sans-serif'
              value={element.task}
              color="black"
              fullWidth
              variant="secondary"
              onChange={(e) => changeTitle(e)}
            />
          </form>
        ) : (
          element.task
        )}
      </td>
      <td>{element.createDate}</td>
      <td>{element.completionDate === null ? '' : element.completionDate}</td>
      <td>
        {isSuccess ? (
          <img onClick={changeStatus} className="table__img" src={check} alt="Выполнено" />
        ) : (
          <img onClick={changeStatus} className="table__img" src={cross} alt="Не выпоплено" />
        )}
      </td>
      <td>
        <img onClick={changeRowEdit} className="table__img" src={edit} alt="Редактирование" />
      </td>
      <td>
        <img
          onClick={() => deleteCurrentTask()}
          className="table__img"
          src={trash}
          alt="Редактирование"
        />
      </td>
      <td>
        <Link to={`/${element.id}`} state={element}>
          <img className="table__img" src={back} alt="Редактирование" />
        </Link>
      </td>
    </tr>
  );
});

export default TableRow;
