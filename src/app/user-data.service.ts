import {InMemoryDbService} from 'angular-in-memory-web-api';
import {UserData} from './user-data';
import { User } from './User';


export class UserDataService implements InMemoryDbService{

createDb(){
const users: UserData[]=[
{id: 1, name: 'Nishu ', age: '22'},
{id: 2, name: 'Saksham', age: '20'},
{id: 3, name: 'Sakshi', age: '19'},
{id: 4, name: 'Sangeetha', age: '29'},
{id: 5, name: 'Mamatha', age: '25'},
{id: 6, name: 'Karthik', age: '27'},
];
const user: User[]=[
    {
      id:1,
      name: 'Pen',
      age: 'v1'

    },
    {
     id:2,
     name: 'Pencil',
     age: 'A3'
   }    ,
   {
     id:3,
     name: 'Table',
     age: 'N8'


   }    ,
   {
     id:4,
     name: 'Chair',
     age: 'M9'

   } ,
   {
     id:5,
     name: 'Bed',
     age: 'PZ'

   }                
   ];
   return {users, user};
 }


//  initializeUser(): User{
//     return{
//       id: 1,
//       name: 'Nishu',
//       age: '22'
// }

  }
//}