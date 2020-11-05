import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from 'src/app/model/enum/error-messages';
import { FormValidation } from 'src/app/util/form-validation';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }
  public errorMessages = ERROR_MESSAGES;

  private contactDetails: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(FormValidation.NAME_REGEX)]],
    subject: ['', [Validators.required, Validators.pattern(FormValidation.ALPHANUMBERIC_HYPEN_REGEX)]],
    emailAddress: ['', [Validators.required, Validators.pattern(FormValidation.EMAIL_REGEX)]],
    emailBody: ['', [Validators.required, Validators.pattern(FormValidation.MESSAGE_REGEX)]]
  });

  getContactDetails() {
    return this.contactDetails;
  }
}
