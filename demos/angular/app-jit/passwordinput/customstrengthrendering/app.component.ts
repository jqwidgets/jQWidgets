import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    passwordStrength(password: string, characters: any, defaultStrength: string): string {
        let length = password.length;
        let letters = characters.letters;
        let numbers = characters.numbers;
        let specialKeys = characters.specialKeys;
        let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers * specialKeys;
        let strengthValue;
        if (length < 4) {
            strengthValue = 'Too short';
        } else if (strengthCoefficient < 10) {
            strengthValue = 'Weak';
        } else if (strengthCoefficient < 20) {
            strengthValue = 'Fair';
        } else if (strengthCoefficient < 30) {
            strengthValue = 'Good';
        } else {
            strengthValue = 'Strong';
        };

        return strengthValue;
    };

    strengthTypeRenderer(password: string, characters: any, defaultStrength: string): string {
        let length = password.length;
        let letters = characters.letters;
        let numbers = characters.numbers;
        let specialKeys = characters.specialKeys;
        let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers / 2 + length;
        let strengthValue;
        let color;
        if (length < 8) {
            strengthValue = 'Too short';
            color = 'rgb(170, 0, 51)';
        } else if (strengthCoefficient < 20) {
            strengthValue = 'Weak';
            color = 'rgb(170, 0, 51)';
        } else if (strengthCoefficient < 30) {
            strengthValue = 'Fair';
            color = 'rgb(255, 204, 51)';
        } else if (strengthCoefficient < 40) {
            strengthValue = 'Good';
            color = 'rgb(45, 152, 243)';
        } else {
            strengthValue = 'Strong';
            color = 'rgb(118, 194, 97)';
        };

        return '<div style="font-style: italic; font-weight: bold; color: "' + color + ';">' + strengthValue + '</div>';
    };
}