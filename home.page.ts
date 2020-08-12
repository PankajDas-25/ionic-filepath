import { Component } from '@angular/core';
import { FileChooser, FileChooserOptions } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  returnpath:string="";
  constructor(public filePath:FilePath,public fileChooser:FileChooser) {


  }

PickFile()
{
  this.fileChooser.open().then((fileuri)=>{
    this.filePath.resolveNativePath(fileuri).then((resolvednativepath)=>{
      this.returnpath = resolvednativepath;
    })
  })

}
}
