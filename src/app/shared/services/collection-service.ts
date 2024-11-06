import { Injectable } from '@angular/core';
import { Collection, CollectionItem } from '../models/collection-model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
const SERVER_URI = 'http://localhost:3000/api/collection_items';

@Injectable({
  providedIn: 'root', // Ensure the service is provided in root or another provider
})
export class CollectionService {
  constructor(private _http: HttpClient) {}
  getCollection(id: number): Observable<CollectionItem[]> {
    return this._http.get<CollectionItem[]>(SERVER_URI);
  }
  addItem(item: CollectionItem): Observable<any> {
    return this._http.post(SERVER_URI, item);
  }
}
