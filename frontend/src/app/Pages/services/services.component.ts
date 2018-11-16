import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('ulState', [
      state('closed', style({
        height: '0',
        overflow: 'hidden',
      }
      )),
      state('open', style({
        height: '*',
      })),

      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('200ms ease-in'))
    ]),
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  servicesList = {
    "doctors": [
      { "id": "0", "profession": "Алерголог", "name": "Алерголог" },
      { "id": "1", "profession": "Терапевт", "name": "Терапевт" },
      { "id": "2", "profession": "Логопед", "name": "Логопед" },
      { "id": "3", "profession": "Імунолог", "name": "Імунолог" },
      { "id": "4", "profession": "Отоларинголог", "name": "Отоларинголог" },
      { "id": "5", "profession": "Хірург" , "name": "Хірург"},
      { "id": "6", "profession": "Невролог", "name": "Невролог"},
      { "id": "7", "profession": "Алерголог", "name": "Алерголог" },
      { "id": "8", "profession": "Виклик_лікаря_додому", "name": "Виклик лікаря додому" }
    ],
    "complex": [
      { "id": "0", "type": "Для_хлопчиків", "name": "Комплексні обстеження для хлопчиків" },
      { "id": "1", "type": "Для_дівчаток", "name": "Комплексні обстеження для дівчаток" },
      { "id": "2", "type": "В_садочку", "name": "Медогляд в садочок" },
      { "id": "3", "type": "В_школі", "name": "Медогляд в школу" },
      { "id": "4", "type": "В_ВНЗ", "name": "Медогляд в ВНЗ" }
    ],
    "diagnositic": [
      { "id": "0", "type": "Томографія", "name": "Комп'ютерна томографія" },
      { "id": "1", "type": "УЗД_дітям", "name": "УЗД дітям" },
      { "id": "2", "type": "Цифровий_рентген", "name": "Цифровий рентген" },
      { "id": "3", "type": "Електроенцефалографія", "name": "Електроенцефалографія" }
    ],
    "analiz": [
      { "id": "0", "type": "Біохімічний_аналіз", "name": "Біохімічний аналіз крові" },
      { "id": "1", "type": "Цитологічне_дослідження", "name": "Цитологічні дослідження" },
      { "id": "2", "type": "Загальний_аналіз_крові_та_сечі", "name": "Загальний аналіз крові та сечі" },
      { "id": "3", "type": "Дихальний_водневий_тест_лактазної_недостатності", "name": "Дихальний водневий тест лактазної недостатності" }
    ],
    "vakcina": [
      { "id": "0", "type": "Біохімічний_аналіз", "name": "Біохімічний аналіз крові" },
      { "id": "1", "type": "Цитологічне_дослідження", "name": "Цитологічні дослідження" },
      { "id": "2", "type": "Загальний_аналіз_крові_та_сечі", "name": "Загальний аналіз крові та сечі" },
      { "id": "3", "type": "Дихальний_водневий_тест_лактазної_недостатності", "name": "Дихальний водневий тест лактазної недостатності" }
    ],
  }

}
