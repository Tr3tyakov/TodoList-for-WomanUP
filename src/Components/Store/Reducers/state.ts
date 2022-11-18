export const initialState: IElement[] = [
  {
    id: 1,
    task: 'Create application for WomanUP',
    about: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    completionDate: '18.11.2022',
    createDate: '17.11.2022',
    status: true,
    edit: false,
    remove: false,
    file: {
      url: '',
      image: '',
    },
  },
];

export interface INewElement {
  task: string;
  about: string;
  createDate: string;
  completionDate: string | null;
  status: boolean;
  edit: boolean;
  remove: boolean;
  file: {
    url: string;
    image: string;
  };
}

export interface IElement extends INewElement {
  id: number;
}
