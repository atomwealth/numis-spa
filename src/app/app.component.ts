import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ItemsState } from './shared/states/items.state';
import { StatusService } from './shared/services/status-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private statusService: StatusService) {}
}
