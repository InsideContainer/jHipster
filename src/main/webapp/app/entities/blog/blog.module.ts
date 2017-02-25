import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Project3SharedModule } from '../../shared';
import { Project3AdminModule } from '../../admin/admin.module';

import {
    BlogService,
    BlogPopupService,
    BlogComponent,
    BlogDetailComponent,
    BlogDialogComponent,
    BlogPopupComponent,
    BlogDeletePopupComponent,
    BlogDeleteDialogComponent,
    blogRoute,
    blogPopupRoute,
} from './';

let ENTITY_STATES = [
    ...blogRoute,
    ...blogPopupRoute,
];

@NgModule({
    imports: [
        Project3SharedModule,
        Project3AdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BlogComponent,
        BlogDetailComponent,
        BlogDialogComponent,
        BlogDeleteDialogComponent,
        BlogPopupComponent,
        BlogDeletePopupComponent,
    ],
    entryComponents: [
        BlogComponent,
        BlogDialogComponent,
        BlogPopupComponent,
        BlogDeleteDialogComponent,
        BlogDeletePopupComponent,
    ],
    providers: [
        BlogService,
        BlogPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Project3BlogModule {}
