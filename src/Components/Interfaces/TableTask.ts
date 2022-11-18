export interface IActionChangeTask {
  payload: {
    id: number;
    task: string;
  };
}
export interface IActionChangeDate {
  payload: {
    id: number;
    date: string;
  };
}
