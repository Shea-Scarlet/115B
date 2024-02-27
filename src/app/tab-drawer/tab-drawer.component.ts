import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tab-drawer',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatIconModule],
  templateUrl: './tab-drawer.component.html',
  styleUrl: './tab-drawer.component.css'
})
export class TabDrawerComponent {
  @Input()
  pageTitle?: string
}
