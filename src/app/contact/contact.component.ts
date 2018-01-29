import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'trinhlam-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: '',
      message: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    }, { updateOn: 'submit' });
  }

  send() {
    if (this.contactForm.valid) {
      console.log('sent');
    } else {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
