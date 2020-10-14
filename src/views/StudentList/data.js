import uuid from 'uuid/v1';

export const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Nom & Postnom',
    width: 500,
    headerAlign: 'center'
  },
  { field: 'sexe', headerName: 'Sexe', width: 90, headerAlign: 'center' },
  {
    field: 'phone',
    headerName: 'Telephone',
    type: 'number',
    width: 300,
    headerAlign: 'center'
  }
];
