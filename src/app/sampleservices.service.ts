
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SampleservicesService {

  url="http://localhost:3000/student"

  constructor(private http:HttpClient) { }


getdata(){
  return this.http.get(this.url)
}

postdata(data:any){
  return this.http.post(this.url,data)

}

deldata(id:any){
  return this.http.delete(`${this.url}/${id}`)

}

}

