import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{ map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  // products: any [] = [];
  constructor( private http: HttpClient) {
  }


  getProducts(){
    const URL = `https://plcracker-express-rest-server.herokuapp.com/productos`;
  
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC11Sp2UYrD6O41Psheog9v5FlTQVzoszKGAzvGEju_ML36D-F2Nn7du34KLBlds55TYoAqSu_QNjYIg9g'
    });
    console.log('este es el servicio');
    return this.http.get (URL, {headers})
    .pipe ( map ( data => data['productos'] ));
  }

}
