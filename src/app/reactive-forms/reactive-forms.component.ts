import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  optionCity: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  unamePattern = "^[a-z0-9_-]{8,15}$";
  profileForm = new FormGroup({
    name: new FormControl('Shruti', [
      Validators.required,
      Validators.minLength(4)],),
    email: new FormControl('Sai', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/)]),
    address: new FormGroup({
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),
      city: new FormControl('Florida', [
        Validators.required]),
      state: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2)]),
      zipcode: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4)])
    }),
    gender: new FormControl('', [
      Validators.required]),
    terms: new FormControl('', [
      Validators.required])

  })
  getProfileForm() {
    console.log("form", this.profileForm.value)
    console.log("whole form", this.profileForm)
  }
  changeCity() {
    console.log("profile", this.profileForm)
  }

}
