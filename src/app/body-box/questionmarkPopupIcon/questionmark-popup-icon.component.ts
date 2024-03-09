import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OnboadingMatIconComponent } from '../../onboading-mat-icon/onboading-mat-icon.component';
import { OnboardingDivComponent } from '../../onboarding-div/onboarding-div.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-questionmark-popup-icon',
  standalone: true,
  imports: [CommonModule, OnboadingMatIconComponent, OnboardingDivComponent, MatButtonModule],
  template: `
    <button
    style="cursor: pointer; border: none; background: none; padding: 0; display: flex; justify-content: center; align-items: center;"
      (click)="onIconClick()"
    >
      <app-onboading-mat-icon
        iconName="help_outline"
        size="lg"
        color="black"
      />
    </button>
  `,
})
export class QuestionmarkPopupIconComponent {
  @Input() showTooltip: boolean = false;
  @Input() Message: string = "Put your tooltip here! This is show the helper message.";
  @Output() showTooltipChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onIconClick() {
    console.log('hello')
    this.showTooltip = !this.showTooltip
  }
}
