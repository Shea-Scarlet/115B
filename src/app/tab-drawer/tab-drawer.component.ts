import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tab-drawer',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './tab-drawer.component.html',
  styleUrl: './tab-drawer.component.css'
})
export class TabDrawerComponent {
  @Input()
  pageTitle?: string
}
