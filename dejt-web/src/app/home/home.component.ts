import { HttpClient, withFetch } from '@angular/common/http';
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
  foodID: string = '';
  message: string = '';

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}

  onNoClick() {
    this._snackBar.open('💔💔💔💔💔💔💔💔💔', 'X');
  }

  onYesClick() {
    if (this.checker == 3) {
      console.log('hello');
      this.message = this.dateID + ' : ' + this.foodID;
    }
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
  }

  setFoodValue(event: any) {
    this.foodID = event.value;
  }

  get isSelected() {
    if (this.checker == 2) {
      if (this.dateID !== '') {
        return false;
      } else {
        return true;
      }
    }
    if (this.checker == 3) {
      if (this.foodID !== '') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
