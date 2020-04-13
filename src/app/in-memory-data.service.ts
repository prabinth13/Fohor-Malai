import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    const users = [
      { id: 1, fullName: 'Admin', email: 'admin@gmail.com', password: 'admin'},
      { id: 2, fullName: 'James McAvoy', email: 'james@gmail.com', password: 'test2' }
    ];
    return {users};
  }

  getToken(user){
    return 'this is a token';
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.id == 'login'){
      console.log('from login');
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      return reqInfo.utils.createResponse$(() => {
       const users = reqInfo.collection.find(user => {
         return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
        });
        let responseBody = {};

        if(users){
          responseBody = {
            id: users.id,
            fullName: users.fullName,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'Users' with id='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found';
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;

      }
      ); 
    } else if (reqInfo.id === 'signup'){
      reqInfo.id = null;
      console.log('from signup');
    }
    }
}
