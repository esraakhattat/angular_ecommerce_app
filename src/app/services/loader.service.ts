import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private loading=new BehaviorSubject<boolean>(false)
loadingVal=this.loading.asObservable();
changeLoading(val:boolean){
  this.loading.next(val)
}
  constructor() { }
}
