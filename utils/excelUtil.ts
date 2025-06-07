import * as XLSX from 'xlsx';

export const readExcel = (filePath: string, sheetName: string): any[] => {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
};