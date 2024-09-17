import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbCardModule, NbInputModule, NbLayoutModule, NbUserModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbLayoutModule, NbInputModule, NbUserModule, NbCardModule],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-layout-header>
          <h1>Welcome to {{title}}!</h1>
        </nb-layout-header>
      </nb-layout-column>
    </nb-layout>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-template';
}
