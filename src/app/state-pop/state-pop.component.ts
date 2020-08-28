import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../population.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-state-pop',
  templateUrl: './state-pop.component.html',
  styleUrls: ['./state-pop.component.scss']
})
export class StatePopComponent implements OnInit {

  populationGetDetails: any;
  isChecked: boolean;
  name: string;
  childName: string;
  constructor(private populationService: PopulationService, public dialog: MatDialog) { }
	ngOnInit() {
		this.populationService.getPopulationDetails().subscribe(data => {
      this.populationGetDetails = data;
		}, error => {
			console.log(error);
		})
  }

  onChildNameChange(event): void {
    this.childName = event;
  }


getClass(density) {
  if(density >= 1000) {
    return 'bg-danger text-white'
  }
  else if(density < 1000 && density >= 500) {
    return 'bg-warning'
  }
  else {
    return ''
  }
}

openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog, {
    width: '31.25rem',
    panelClass: 'support-table-popup1'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}

@Component({
selector: 'dialog-content-example-dialog',
templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}