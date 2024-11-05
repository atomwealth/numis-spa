import { Injectable, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StatusService implements OnDestroy {
  intervalSubscription$!: Subscription;

  constructor() {
    this.intervalSubscription$ = interval(1000).subscribe(() => {
      console.log('yuhu');
    });
  }

  public ngOnDestroy(): void {
    if (this.intervalSubscription$) {
      this.intervalSubscription$.unsubscribe();
    }
  }
}
