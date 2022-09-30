/// <reference path = './crud.d.ts' />
//./crud.js
//./crud.d.ts />

import { RowElement, RowID } from './interface';
import * as CRUD from './crud';


const row: RowElement = {
  firstName: 'Guilaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
	...row,
	age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);