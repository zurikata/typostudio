import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateContactoGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  contactForm:FormGroup;

  errorMessage: string = '';
  
  successMessage: string = '';

  constructor(
    private fb:FormBuilder,
    private createContactoGQL:CreateContactoGQL
  ) { 
    this.createContactForm();
  }

  ngOnInit(): void {

  }

  createContactForm(){
    this.contactForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required]
    })
  }


  sendContactInfo(){
    const contactData = { 
      "input": {
        "data":this.contactForm.value
      }
    }
    this.createContactoGQL.mutate( contactData ).subscribe(
      () => {
        this.contactForm.controls.name.reset('');
        this.contactForm.controls.email.reset('');
        this.contactForm.controls.message.reset('');
        this.successMessage = "Tu mensaje ha sido entregado. Pronto nos pondremos en contacto";
      },
      (error) => {

        console.error('Error:', error)
      }
    );
  }

}
