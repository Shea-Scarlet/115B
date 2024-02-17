import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { User } from '../user';

@Component({
  selector: 'Upload-BaseModal',
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <section class="Upload-BaseModal">
      <h2>Upload File Base Model Component</h2>
      <p>
        Upload File Base Modal implementation coming soon!
      </p>
    </section>
  </article>`,
  styleUrls: ['./UploadBaseModal.css'],
})
export class UploadBaseModal {
  user: User | null = null;
}
