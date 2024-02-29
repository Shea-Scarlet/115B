import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tab-drawer',
  standalone: true,
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './tab-drawer.component.html',
  styleUrl: './tab-drawer.component.css'
})

export class TabDrawerComponent {
  @Input()
  pageTitle?: string
}
