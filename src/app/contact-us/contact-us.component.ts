import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      hbspt.forms.create({
        region: "eu1",
        portalId: "26145073",
        formId: "82a4e477-2051-460a-b164-a32ccf28db0a"
      });
    `;

    console.log(script)

    this._renderer2.appendChild(this._document.getElementById('contact-us'), script);
  }

}
