import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-hydra',
  templateUrl: './redirect-hydra.component.html',
  styleUrls: ['./redirect-hydra.component.css'],
})
export class RedirectHydraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Redirect to the desired website
    window.location.href = 'https://hydrainsights.online/';
  }
}
