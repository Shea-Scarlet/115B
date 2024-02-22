import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'QuestionMarkAccordionButton',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="QuestionMarkAccordionButton">
      <h2>Question Mark Accordion Button Component</h2>
      <p>Question Mark Accordion Component implementation tba.</p>
    </section>
  </article>`,
  styleUrls: ['./QuestionMarkAccordionButton.css'],
})
export class QuestionMarkAccordionButton {
  user: User | null = null;
}
