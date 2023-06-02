import { Component } from '@angular/core';

interface Sheet {
  name: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  sheets: Sheet[] = [{ name: 'Sheet 1' }];

  addSheet(): void {
    let sheetNumber = this.sheets.length + 1;
  
    // Find the maximum sheet number from the existing sheets
    const existingSheetNumbers = this.sheets.map(sheet => parseInt(sheet.name.split(' ')[1], 10));
    const maxSheetNumber = Math.max(...existingSheetNumbers);
  
    // Increment the sheet number until a unique one is found
    while (existingSheetNumbers.includes(sheetNumber)) {
      sheetNumber++;
    }
  
    const sheetName = `Sheet ${sheetNumber}`;
    this.sheets.push({ name: sheetName });
  }

  removeSheet(index: number) {
    this.sheets.splice(index, 1);
  }

  selectSheet(index: number) {
    // Logic to handle selecting a sheet
    console.log(`Selected sheet: ${this.sheets[index].name}`);
  }

}
