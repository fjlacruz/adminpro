import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })
    // this.getUsuarios();
    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('promesa');
    //   } else {
    //     reject('error');
    //   }

    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // })
    //   .catch(error => console.log('error....!!!!'))
    // console.log('fin init')
  }

  getUsuarios() {
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body.data));
    });

    return promesa;

  }

}
