import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { StatusService } from '../services/status-service';
import { SetStatus } from '../actions/status.actions';

export interface StatusStateModel {
  currentTime: Date;
}

@State<StatusStateModel>({
  name: 'status',
  defaults: {
    currentTime: new Date(),
  },
})
@Injectable()
export class StatusState {
  constructor(private statusService: StatusService) {}

  @Selector()
  static getStatus(state: StatusStateModel) {
    return state.currentTime;
  }

  @Action(SetStatus)
  setStatus(ctx: StateContext<StatusStateModel>) {
    ctx.patchState({ currentTime: new Date() });
  }
}
