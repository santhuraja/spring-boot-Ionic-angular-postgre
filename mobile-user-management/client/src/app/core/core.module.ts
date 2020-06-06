import { CommonModule } from '@angular/common';
import { Optional, SkipSelf, NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: []
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded');
        }
    }
}