import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonInputs, PopUpFormButtonComponent } from '../../stories/Button That Creates PopUp Form/PopUpFormButton.component';
import { OnboardingDivComponent } from '../onboarding-div/onboarding-div.component';
import { CheckmarkIconComponent } from './checkmarkIcon/checkmark-icon.component';

@Component({
  selector: 'app-body-box',
  standalone: true,
  imports: [CommonModule, MatIconModule, PopUpFormButtonComponent, OnboardingDivComponent, CheckmarkIconComponent],
  templateUrl: './body-box.component.html',
  styleUrl: './body-box.component.css'
})
export class BodyBoxComponent {
  @Input() title: string = "Set up your account";
  @Input() subtext: string = "Choose and set up your sign in method.";
  @Input() taskCompleted: boolean = false;
  @Input() buttons: ButtonInputs[] = [
    {label: 'First Button'},
    {label: 'Second Button'},
  ]
}
