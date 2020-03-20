import { Component, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { AllUserResponse } from "src/app/model/allUser-response.interface";
import { AlarmMeApiService } from "src/app/service/alarm-me-api.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { ChangeEnabledRequest } from "src/app/request/changeEnabled-request.interface";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  displayedColumns = ["email", "fullname", "disable"];

  users: AllUserResponse[];
  body: ChangeEnabledRequest;

  constructor(
    private service: AlarmMeApiService,
    //public dialog: MatDialog,
    @Inject(LOCALE_ID) private locale: string,
    private snackbar: MatSnackBar
  ) {}
  config: MatSnackBarConfig = {
    duration: 2500
  };

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getAllUsers().subscribe(resp => {
      this.users = resp;
    });
  }

  changeEnabled(user: AllUserResponse) {
    console.log(user)
    if (user.enabled === true) {
      console.log("HOLA PACO")
      this.body={
        enabled:false
      }
      this.service.changeEnabled(user._id, this.body).subscribe(resp =>{
          window.location.reload()
      });
    } else {
      console.log("ADIOS PACO")
      this.body={
        enabled:true
      }
      this.service.changeEnabled(user._id, this.body).subscribe(resp =>{
        window.location.reload()
    });
    }
    
  }
}
