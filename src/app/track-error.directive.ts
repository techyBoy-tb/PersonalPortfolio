import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormHelper } from './util/form-helper';

@Directive({
  selector: '[appTrackError]'
})
export class TrackErrorDirective implements AfterViewInit, OnDestroy {

  private errorClassName = '.errorDirective_error';
  private elType = {
    input: 'input',
    teaxtarea: 'textarea'
  };
  private eventType = {
    blur: 'blur',
    click: 'click'
  };
  private observer = new MutationObserver(() => this.checkForChanges());
  private element: HTMLElement;
  private listenersArray: Array<EventListener> = Array<EventListener>();
  private hiddenElements: Object = {};
  private sentErrors: Object = {};
  private formName: string;
  @Input() formGroup: FormGroup;
  private submitBtnListener;
  private submitBtn: Element;
  @Input('appTrackError') submitBtnId;

  constructor(private el: ElementRef, private formHelper: FormHelper) { }

  ngAfterViewInit() {
    this.submitBtnId = 'submit';
    if (!this.formGroup || this.el) { return; }
    this.element = this.el.nativeElement;
    this.trackSubmitClick(document.querySelector('#' + this.submitBtnId));
    this.formName = this.formHelper.getControlName(this.formGroup);
    this.observeChanges();
    this.findControls(this.formGroup);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
    if (this.submitBtn) {
      this.submitBtn.removeEventListener(this.eventType.click, this.submitBtnListener);
    }
  }

  checkForChanges(): void {
    this.observer.disconnect();
    setTimeout(() => { this.updateHiddenElements(); this.observeChanges(); }, 300);
  }

  updateHiddenElements() {

  }

  observeChanges(): void {
    this.observer.observe(this.element, { childList: true, subtree: true, characterData: true });
  }

  trackSubmitClick(button: Element): void {
    if (!button) { return; }
    this.submitBtn = button;
    button.addEventListener(this.eventType.click, this.submitBtnListener = () => {
      const messages = this.getAllErrors(this.formGroup);
    });
  }

  findControls(formGroup: FormGroup): void {
    for (const name in formGroup.controls) {
      if (!formGroup.controls.hasOwnProperty(name)) { continue; }
      const control = formGroup.controls[name];
      if (control instanceof FormControl) {
        this.findElement(control, this.getSelector(control, ''), name);
      }
    }
  }

  getAllErrors(formGroup: FormGroup, object?: Object): Object {
    const obj = object || {};
    for (const name in formGroup.controls) {
      if (!formGroup.controls.hasOwnProperty(name)) { continue; }
      const control = formGroup.controls[name];
      if (control.errors && control.touched) {
        const onlyControlName = this.checkForControlName(this.getSelector(control, ''));
        const message = this.retrieveErrorText(this.element.querySelector(onlyControlName));
        if (message) { obj[name] = message; }
      }
    }
    return obj;
  }

  findElement(control, selector, name) {
    const foundElement: HTMLElement = this.element.querySelector(selector);
    if (!foundElement) { this.addToHiddenElements(selector, control, name); return; }
    const elementToUse: HTMLElement = foundElement.querySelector(this.elType.input)
      || foundElement.querySelector(this.elType.teaxtarea) || foundElement;
    if (this.listenersArray[selector]) { elementToUse.addEventListener(this.eventType.blur, this.listenersArray[selector]); return; }
    this.addListener(control, elementToUse, selector, name);
  }

  getSelector(c: AbstractControl, selector): string | null {
    selector = '[' + this.getControlType(c) + '="' + this.getControlName(c) + '"]' + selector;
    if (c.parent && this.getControlName(c.parent)) {
      selector = ' ' + selector;
      return this.getSelector(c.parent, selector);
    } else { return selector; }
  }

  checkForControlName(selectors: string): string {
    const selector = selectors.split(' ');
    if (selectors.includes('formGroupName') && selectors.includes('formControlName')) {
      for (let i = 0; i < selectors.length; i++) {
        if (selector[i].includes('formControlName')) {
          return selector[i];
        }
      }
    } else { return selectors; }
  }

  retrieveErrorText(foundElement: HTMLElement): string {
    const parent: HTMLElement = foundElement ? foundElement.parentElement : null;
    const errorDirective: HTMLElement = parent ? parent.querySelector(this.errorClassName) : null;
    return errorDirective ? errorDirective.textContent : parent ? this.retrieveErrorText(parent) : null;
  }

  addToHiddenElements(selector, control, name): void {
    if (this.hiddenElements[selector]) { return; }
    this.hiddenElements[selector] = {
      name: name,
      selector: selector,
      control: control,
      showing: false
    };
  }

  addListener(control, elementToUse, selector, name): void {
    elementToUse.addEventListener(this.eventType.blur, this.listenersArray[selector] = () => {
      setTimeout(() => {
        const message = this.retrieveErrorText(elementToUse);
        if (!control.errors && control.touched && message) {
          return;
        }
        const messageObject: Object = {};
        messageObject[name] = message;
        elementToUse.removeEventListener(this.eventType.blur, this.listenersArray[selector]);
        this.sentErrors[name] = message;
      }, 150);
    });
  }

  getControlType(control: AbstractControl): string {
    const searchType = (control instanceof FormGroup) ? 'formGroupName' : 'formArrayName';
    return (control instanceof FormControl) ? 'formControlName' : searchType;
  }

  getControlName(control: AbstractControl): string {
    if (!control.parent) { return; }
    const parent = control.parent;
    const foundName = Object.keys(parent.controls).find(name => control === parent.controls[name]);
    return foundName !== this.formName ? foundName : '';
  }
}
