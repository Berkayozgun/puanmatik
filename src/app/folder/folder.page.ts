import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public mat:number=0;
  public fen:number=0;
  public sos:number=0;
  public tur:number=0;
  public sonuc:number=0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  hesapla(){
    this.sonuc = 200 + this.mat*1.8+this.fen*1.2+this.sos*0.8+this.tur*0.9;
  }
}
