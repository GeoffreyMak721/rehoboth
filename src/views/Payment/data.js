import uuid from 'uuid/v1';

export const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'date',
    headerName: 'Date Paiement',
    width: 200,
    resizable: false,
    type: 'date',
    headerAlign: 'center'
  },
  {
    field: 'libelle',
    headerName: 'Libellé',
    width: 600,
    headerAlign: 'center'
  },
  {
    field: 'debit',
    headerName: 'Débit',
    type: 'number',
    width: 100,
    headerAlign: 'center'
  },
  {
    field: 'credit',
    headerName: 'Crédit',
    type: 'number',
    width: 100,
    headerAlign: 'center'
  }
];

export const rows = [
  {
    id: uuid(),
    date: '01/08/2020',
    libelle: 'Initialisation frais',
    debit: 250,
    credit: null
  },
  {
    id: uuid(),
    date: '07/08/2020',
    libelle: 'Acompte frais',
    debit: null,
    credit: 25
  },
  {
    id: uuid(),
    date: '20/08/2020',
    libelle: 'Acompte frais',
    debit: null,
    credit: 50
  },
  {
    id: uuid(),
    date: '24/08/2020',
    libelle: 'Acompte frais',
    debit: null,
    credit: 25
  },
  {
    id: uuid(),
    date: '27/08/2020',
    libelle: 'Acompte frais',
    debit: null,
    credit: 50
  }
];

// export default [
//   {
//     id: uuid(),
//     name: 'Ekaterina Tankova',
//     address: {
//       country: 'USA',
//       state: 'West Virginia',
//       city: 'Parkersburg',
//       street: '2849 Fulton Street'
//     },
//     email: 'ekaterina.tankova@devias.io',
//     phone: '304-428-3097',
//     avatarUrl: '/images/avatars/avatar_3.png',
//     createdAt: 1555016400000
//   },
//   {
//     id: uuid(),
//     name: 'Cao Yu',
//     address: {
//       country: 'USA',
//       state: 'Bristow',
//       city: 'Iowa',
//       street: '1865  Pleasant Hill Road'
//     },
//     email: 'cao.yu@devias.io',
//     avatarUrl: '/images/avatars/avatar_4.png',
//     phone: '712-351-5711',
//     createdAt: 1555016400000
//   },
//   {
//     id: uuid(),
//     name: 'Alexa Richardson',
//     address: {
//       country: 'USA',
//       state: 'Georgia',
//       city: 'Atlanta',
//       street: '4894  Lakeland Park Drive'
//     },
//     email: 'alexa.richardson@devias.io',
//     phone: '770-635-2682',
//     avatarUrl: '/images/avatars/avatar_2.png',
//     createdAt: 1555016400000
//   },
//   {
//     id: uuid(),
//     name: 'Anje Keizer',
//     address: {
//       country: 'USA',
//       state: 'Ohio',
//       city: 'Dover',
//       street: '4158  Hedge Street'
//     },
//     email: 'anje.keizer@devias.io',
//     avatarUrl: '/images/avatars/avatar_5.png',
//     phone: '908-691-3242',
//     createdAt: 1554930000000
//   },
//   {
//     id: uuid(),
//     name: 'Clarke Gillebert',
//     address: {
//       country: 'USA',
//       state: 'Texas',
//       city: 'Dallas',
//       street: '75247'
//     },
//     email: 'clarke.gillebert@devias.io',
//     phone: '972-333-4106',
//     avatarUrl: '/images/avatars/avatar_6.png',
//     createdAt: 1554757200000
//   },
//   {
//     id: uuid(),
//     name: 'Adam Denisov',
//     address: {
//       country: 'USA',
//       state: 'California',
//       city: 'Bakerfield',
//       street: '317 Angus Road'
//     },
//     email: 'adam.denisov@devias.io',
//     phone: '858-602-3409',
//     avatarUrl: '/images/avatars/avatar_1.png',
//     createdAt: 1554670800000
//   },
//   {
//     id: uuid(),
//     name: 'Ava Gregoraci',
//     address: {
//       country: 'USA',
//       state: 'California',
//       city: 'Redondo Beach',
//       street: '2188  Armbrester Drive'
//     },
//     email: 'ava.gregoraci@devias.io',
//     avatarUrl: '/images/avatars/avatar_7.png',
//     phone: '415-907-2647',
//     createdAt: 1554325200000
//   },
//   {
//     id: uuid(),
//     name: 'Emilee Simchenko',
//     address: {
//       country: 'USA',
//       state: 'Nevada',
//       city: 'Las Vegas',
//       street: '1798  Hickory Ridge Drive'
//     },
//     email: 'emilee.simchenko@devias.io',
//     phone: '702-661-1654',
//     avatarUrl: '/images/avatars/avatar_8.png',
//     createdAt: 1523048400000
//   },
//   {
//     id: uuid(),
//     name: 'Kwak Seong-Min',
//     address: {
//       country: 'USA',
//       state: 'Michigan',
//       city: 'Detroit',
//       street: '3934  Wildrose Lane'
//     },
//     email: 'kwak.seong.min@devias.io',
//     avatarUrl: '/images/avatars/avatar_9.png',
//     phone: '313-812-8947'
//   },
//   {
//     id: uuid(),
//     name: 'Merrile Burgett',
//     address: {
//       country: 'USA',
//       state: 'Utah',
//       city: 'Salt Lake City',
//       street: '368 Lamberts Branch Road'
//     },
//     email: 'merrile.burgett@devias.io',
//     phone: '801-301-7894',
//     avatarUrl: '/images/avatars/avatar_10.png',
//     createdAt: 1522702800000
//   }
// ];
