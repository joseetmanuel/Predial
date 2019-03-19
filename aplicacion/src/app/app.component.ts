import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { MDCDialog } from '@material/dialog';
import { MDCRipple } from '@material/ripple';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType  } from 'ngx-paypal';
import { MatSnackBar } from '@angular/material';

export interface Sel {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  localidadSelect: number;
  predioSelect: number;
  registroNumber: string;
  razon: string;
  moral: boolean;
  resultado: any;
  numero = 1;
  dialog: MDCDialog;
  titErr: string;
  msgErr: string;
  payPalConfig ?: PayPalConfig;
  comision: number;


  localidades: Sel[] = [
    { value: 1, viewValue: '1-501-ZITACUARO' },
    { value: 2, viewValue: '2-501-CRESCENCIO MORALES' },
    { value: 3, viewValue: '3-501-LOCALIDAD TRES' }
  ];

  tipos: Sel[] = [
    { value: 1, viewValue: '1 - URBANO' },
    { value: 2, viewValue: '2 - RÚSTICO' }
  ];

  registro = new FormControl('', [Validators.required]);
  razonSocial = new FormControl('', [Validators.required]);
  showSuccess: boolean;
  showCancel: boolean;
  showError: boolean;

  constructor(private appService: AppService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    // this.initConfig();
  }
  Consulta() {
    this.numero = 0;
    this.appService
      .post_datos(
        this.localidadSelect,
        this.predioSelect,
        this.registroNumber,
        this.razon,
        this.moral
      )
      .subscribe(
        (result: any) => {
          if (result.err === true) {
            console.log(result.msgErr);
            this.msgErr = result.msgErr;
            this.titErr = result.titErr;
            const buttonRipple = new MDCRipple(
              document.querySelector('.mdc-button')
            );
            this.dialog = new MDCDialog(
              window.document.querySelector('.mdc-dialog')
            );
            this.dialog.listen('MDCDialog:opened', () => {});
            this.dialog.open();
          } else {
            this.resultado = result;
            this.comision = (parseFloat(this.resultado.total) * .0395) + 19;
            this.initConfig();
          }
          this.numero = 1;
        },
        (error: any) => {
          this.titErr = error.name;
          this.msgErr = error.message;
          const buttonRipple = new MDCRipple(
            document.querySelector('.mdc-button')
          );
          this.dialog = new MDCDialog(
            window.document.querySelector('.mdc-dialog')
          );
          this.dialog.listen('MDCDialog:opened', () => {});
          this.dialog.open();
          this.numero = 1;
        }
      );
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        production: 'AZH4Z1D9lA5IJE5m7uL407D2jet2P72L3GxPS6bqvfdzkeq_2TLZ7afqQbpVWMdeYp7vzx3FPn1225Eu',
        sandbox : 'AZH4Z1D9lA5IJE5m7uL407D2jet2P72L3GxPS6bqvfdzkeq_2TLZ7afqQbpVWMdeYp7vzx3FPn1225Eu',
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        this.snackBar.open('Pago hecho', 'Gracias', {
          duration: 2000,
        });
      },
      onCancel: (data, actions) => {
        this.snackBar.open('Pago cancelado', 'ok', {
          duration: 2000,
        });
      },
      onError: (err) => {
        this.snackBar.open(err, 'Error', {
          duration: 2000,
        });
      },
      transactions: [{
        amount: {
          currency: 'MXN',
          total: parseFloat(this.resultado.total) + this.comision
        },
        item_list: {
          items: [{
            name: 'Predio',
            currency: 'MXN',
            price:  parseFloat(this.resultado.total) + this.comision,
            quantity: 1
          }]
        }
      }],
    });
  }
}
