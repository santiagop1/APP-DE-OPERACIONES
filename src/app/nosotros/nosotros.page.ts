  
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  numero1 = null;
  operacion = null;
  numero2 = null;

  constructor(public alertController: AlertController) { }

  async calcular(){
    //VALIDACION DE DATOS, Y SIGNOS
    /*
    if (this.numero1 == null || this.numero1 == "" || this.numero2 == null || this.operacion == "" || this.operacion == null || this.numero1 == "") {
      console.log("error datos")      
    }
    else{
      if (this.operacion != "*" || this.operacion != "/" || this.operacion != "+" || this.operacion != "-") {
        console.log("error de signo")
      }else{
        */
        if(this.operacion == "/"){
          let division = this.numero1/this.numero2
          const alerta1 = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'RESULTADO',
            message: "RESULTADO " + this.numero1 + "/" + this.numero2 + "= " + division,
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
          this.numero1="",
          this.numero2="",
          this.operacion=""
      
          await alerta1.present();
        }
        if(this.operacion == "*"){
          let multiplicacion = this.numero1*this.numero2
          const alerta2 = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'RESULTADO',
            message: "RESULTADO " + this.numero1 + "*" + this.numero2 + "= " + multiplicacion,
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
          this.numero1="",
          this.numero2="",
          this.operacion=""
      
          await alerta2.present();
        }

        if(this.operacion == "+"){
          let suma = parseInt(this.numero1)+parseInt(this.numero2)
          const alerta3 = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'RESULTADO',
            message: "RESULTADO " + this.numero1 + "+" + this.numero2 + "= " + suma,
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
          this.numero1="",
          this.numero2="",
          this.operacion=""
      
          await alerta3.present();
        }

        if(this.operacion == "-"){
          let resta = parseInt(this.numero1)-parseInt(this.numero2)
          const alerta4 = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'RESULTADO',
            message: "RESULTADO " + this.numero1 + "-" + this.numero2 + "= " + resta,
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
          this.numero1="",
          this.numero2="",
          this.operacion=""
      
          await alerta4.present();
        }
        /*
      }
    }
    */

  }

  ngOnInit() {
  }

}