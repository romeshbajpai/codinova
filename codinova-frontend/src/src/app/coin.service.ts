import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private _http: HttpClient) { }
  getCoinData():Observable<any>{
    const url = "http://localhost:5000/Api/v2/coinApi/icon";
    return this._http.get(url);
  }
}
