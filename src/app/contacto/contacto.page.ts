  
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(public alertController: AlertController) { }

  saludo = null;

  async saludar(){
    if (this.saludo == "" || this.saludo == null) {
      const alerta = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: "INSERTE UN NOMBRE PARA SALUDAR ",
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('OK');
            }
          }        
        ]
      });
      this.saludo="",
  
      await alerta.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'SALUDO',
        message: "Saludos " + this.saludo,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }        
        ]
      });
      this.saludo="",
  
      await alert.present();
    }
    

  }

  ngOnInit() {
  }

}