import { Injectable } from '@angular/core';
import { Collection } from '../models/collection-model';
import { MOCK_COLLECTION } from '../../testing/mocks/data/collection.mocks';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  getCollection(id: number): Observable<Collection> {
    return of(MOCK_COLLECTION);
  }
}
