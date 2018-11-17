import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-suggestion',
    templateUrl: './suggestion.component.html',
    styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent {
    public suggestion = `Ми завжди готові допомогти Вам`;
}
