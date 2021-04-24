import { Component } from '@angular/core';
import { StorageService, Invoice } from '../storage.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  invoices: Invoice[] = [];

  public options: Array<any> = [
    { name: 'Criar Fatura', url: "/cadastrar-fatura" },
    { name: 'Visualizar Fatura' },
    { name: 'Status da Renda' },
    { name: 'Coach', url: "/coach" },
    // deixei somente "Coach" pois "Coach de Investimento" estava aumentando
    // o tamanho da caixa dele no slide.
  ];

  public slidesOptions: any = { slidesPerView: 3, freeModey: true};

  constructor(private storageService: StorageService, private plt: Platform) {
    this.plt.ready().then(() => {
      this.loadInvoices();
    });
  }

  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }
}
