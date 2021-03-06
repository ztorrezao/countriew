import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as js2xmlparser from 'js2xmlparser';

const XLS_TYPE = 'application/vnd.ms-excel;charset=UTF-8';
const XLSX_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const CSV_TYPE = 'text/csv;charset=UTF-8';
const XML_TYPE = 'text/xml;charset=UTF-8';

const XLS_EXTENSION = '.xls';
const XLSX_EXTENSION = '.xlsx';
const CSV_EXTENSION = '.csv';
const XML_EXTENSION = '.xml';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  /**
   * exportAsXLSXFile
   */
  public exportAsXLSXFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    this.saveAsFile(excelBuffer, excelFileName, XLSX_TYPE, XLSX_EXTENSION);
  }

  /**
   * exportAsXLSFile
   */
  public exportAsXLSFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xls',
      type: 'array',
    });

    this.saveAsFile(excelBuffer, excelFileName, XLS_TYPE, XLS_EXTENSION);
  }

  /**
   * exportAsCSVFile
   */
  public exportAsCSVFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'csv',
      type: 'array',
    });

    this.saveAsFile(excelBuffer, excelFileName, CSV_TYPE, CSV_EXTENSION);
  }

  public exportAsXMLFile(json: any[], xmlFileName: string): void {

    const xmlBuffer: any = js2xmlparser.parse('paises', { pais: json });
    this.saveAsFile(xmlBuffer, xmlFileName, XML_TYPE, XML_EXTENSION);
  }

  /**
   * saveImage
   */
  public saveImageSVG(URL: string, name: string) {
    FileSaver.saveAs(URL, `${name}.svg`);
  }

  private saveAsFile(
    buffer: any,
    fileName: string,
    type: string,
    extension: string
  ) {
    const data: Blob = new Blob([buffer], { type });

    const time = new Date().getTime();

    FileSaver.saveAs(data, `${fileName}_export_${time}${extension}`);
  }
}
