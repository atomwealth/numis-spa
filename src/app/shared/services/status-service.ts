import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { interval, Subscription } from 'rxjs';
import { SetStatus } from '../actions/status.actions';

@Injectable({ providedIn: 'root' })
export class StatusService implements OnDestroy {
  intervalSubscription$!: Subscription;

  constructor(private store: Store) {
    this.intervalSubscription$ = interval(1000).subscribe(() => {
      store.dispatch(new SetStatus('d')); // TODO fix payload
    });
  }

  public ngOnDestroy(): void {
    if (this.intervalSubscription$) {
      this.intervalSubscription$.unsubscribe();
    }
  }
}
