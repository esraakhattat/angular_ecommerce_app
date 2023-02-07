import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter: number = 0
  hidden: boolean = true
  constructor(private counterService: CounterService) { }
  ngOnInit() {
    this.counterService.counterVal.subscribe((counter) => {
      this.counter = counter
      if (this.counter == 0) this.hidden = true
      else this.hidden = false
    })

  }
}
