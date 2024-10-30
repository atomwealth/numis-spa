import { Injectable } from '@angular/core';
import { Collection } from '../models/collection-model';
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
  getCollection(id: number): Observable<Collection> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    });
    return this._http
      .get<Collection>('localhost:3000/api/collection_items', { headers })
      .pipe(
        tap((response) => {
          console.log('Request URL:', '/api/collection_items');
          console.log('Response:', response);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Full error object:', error);
    console.error('Request URL that failed:', error.url);
    console.error('Error status:', error.status);
    console.error('Error message:', error.message);

    return throwError(() => error);
  }
}
