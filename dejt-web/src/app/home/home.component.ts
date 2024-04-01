import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  checker = 0;
  dateID: string = '';

  constructor(private _snackBar: MatSnackBar) {}

  onNoClick() {
    this._snackBar.open('💔💔💔💔💔💔💔💔💔', 'X');
  }

  onYesClick() {
    this.checker += 1;
  }

  back() {
    if (this.checker == 0) {
      return;
    } else {
      this.checker -= 1;
    }
  }

  setDateIdeeValue(event: any) {
    this.dateID = event.value;
    console.log(this.dateID);
  }
}
