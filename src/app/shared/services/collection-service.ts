import { Injectable } from '@angular/core';
import { Collection, CollectionItem } from '../models/collection-model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Ensure the service is provided in root or another provider
})
export class CollectionService {
  constructor(private _http: HttpClient) {}
  getCollection(id: number): Observable<CollectionItem[]> {
    return this._http.get<CollectionItem[]>(
      'http://localhost:3000/api/collection_items'
    );
  }
}
