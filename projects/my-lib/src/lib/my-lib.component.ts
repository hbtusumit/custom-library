import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
  <form method="post">
   <div>
     <label for="uname"><b>UserName:</b></label>
     <input type="text" placeholder="Enter User Name" name="uname" required style="margin:10px;">
     <br/>
     <label for="pass"><b>Password:</b></label>
     <input type="password" placeholder="Enter Password" name="pass" required style="margin:10px;">
     <br/>
     <button type="submit">Login</button>
   </div>
  </form>
  `
  ,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
