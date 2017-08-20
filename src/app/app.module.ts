import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';



// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        // Register the modules
        BrowserAnimationsModule,
        ButtonsModule,
        GridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
