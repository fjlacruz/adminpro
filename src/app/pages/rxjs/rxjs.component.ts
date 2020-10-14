import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
    this.retornaObservable()
      .pipe(retry(1))
      .subscribe(
        valor => console.log('Subs:', valor),
        error => console.warn('Error:', error),
        () => console.info('obs terminado')
      );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {
    return interval(1000).pipe(
      take(10),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        // console.log('tick')
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('llego a 2');
        }
      }, 1000);
    });
    return obs$;
  }
}
