import { Component, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'proerp-help-index',
    templateUrl: './app/proerp/feature.component.html',
    styleUrls: ['./app/proerp/feature.component.css']
})
export class ProERPComponent {
    constructor(
            private route: ActivatedRoute,
            private router: Router
        ) { }
    
    goToCh1(){
        this.router.navigate(['/proerp-index/ch1', { id: 15, foo: 'foo' }]);
    }
}