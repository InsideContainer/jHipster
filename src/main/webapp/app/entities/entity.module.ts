import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Project3BlogModule } from './blog/blog.module';
import { Project3EntryModule } from './entry/entry.module';
import { Project3TagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Project3BlogModule,
        Project3EntryModule,
        Project3TagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Project3EntityModule {}
