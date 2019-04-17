import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('taxiFare') fareInput: ElementRef;
  @ViewChild('paidAmount') paidAmountInput: ElementRef;
  @ViewChild('numOfPeople') numOfPeopleInput: ElementRef;

  change;
  fare;
  paid_amount;
  num_of_people;

  payments = [];

  imali_ka_driver;
  on_hand;

  getChange() {
    this.paid_amount = this.paidAmountInput.nativeElement.value;
    this.num_of_people = this.numOfPeopleInput.nativeElement.value;
    this.fare = this.fareInput.nativeElement.value;

    this.change = this.paid_amount - (this.num_of_people * this.fare);

    const id = this.payments.length + 1;
    console.log(id);
    const paymentObject = {
      'id': id,
      'paid_amount': this.paid_amount,
      'num_of_people': this.num_of_people,
      'fare': this.fare,
      'change': this.change
    };

    this.payments.push(paymentObject);

    this.on_hand = this.paid_amount;
    console.log(this.payments);
  }

  giveChange(payment){
    // const paymentObject = this.payments.find((po) => {
    //   return po.id === payment.id;
    // });

    this.payments = this.payments.filter((po) => {
      return po.id !== payment.id;
    });

  }

}
