import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './../models/record.model';

@Injectable({
  providedIn: 'root'
})
  export class RecordService {
    constructor (private http: HttpClient) {}
  
    createRecord(record: Record) {
      console.log("create record serive?")
        return this.http.post('http://127.0.0.1:5000/records', record);
    }
    
}