import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  ButtonInputs,
  PopUpFormButtonComponent,
} from '../../stories/Button That Creates PopUp Form/PopUpFormButton.component';
import { CheckmarkIconComponent } from './checkmarkIcon/checkmark-icon.component';
import { PopUpDialogueButtonComponent } from '../../stories/Button That Create PopUp Dialogue/PopUpDialogueButton.component';
import { OnboardingDivComponent } from '../onboarding-div/onboarding-div.component';
import { YesNoButtonsComponent } from '../../stories/YesNoButttons/YesNoButtons.component';

@Component({
  selector: 'app-body-box',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    PopUpFormButtonComponent,
    OnboardingDivComponent,
    CheckmarkIconComponent,
    PopUpDialogueButtonComponent,
    YesNoButtonsComponent,
  ],
  templateUrl: './body-box.component.html',
  styleUrl: './body-box.component.css',
})
export class BodyBoxComponent {
  @Input() title: string = 'Set up your account';
  @Input() subtext: string = 'Choose and set up your sign in method.';
  @Input() isOptional: boolean = false;
  @Input() taskCompleted: boolean = false;
  @Input() hasBinaryButton: boolean = false;
  @Input() buttons: ButtonInputs[] = [{ label: 'First Button' }, { label: 'Second Button' }];
  @Input() dialogueText!: string;
}
