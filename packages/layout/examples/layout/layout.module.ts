import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	CookieconsentModule,
	FooterModule,
	HeaderModule,
	HeroModule,
	ModalModule,
	PaneModule,
	SidebarModule
} from '@acpaas-ui/ngx-components/layout';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { RouterModule } from '@angular/router';

import { AUIDemoModalComponent } from './pages/demo/demo-modal.component';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		// CookieconsentModule.forRoot({
		// 	autoInit: true,
		// 	content: {
		// 		message: 'I am the cookie consent demo. Will you allow my cookies?',
		// 		dismiss: 'Allow cookies',
		// 		link: 'Learn more',
		// 		href: 'http://cookiepedia.co.uk/all-about-cookies',
		// 	},
		// 	cookie: {
		// 		name: 'cookieconsent_demo',
		// 		path: '/',
		// 		domain: '',
		// 		expiryDays: 1,
		// 	},
		// 	elements: {
		// 		messagelink: `<p id="cookieconsent:desc">{{message}}
		// 			<a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a>
		// 		</p>`,
		// 		dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button">{{dismiss}}</button>',
		// 	},
		// }),
		FooterModule,
		HeaderModule,
		HeroModule,
		ModalModule,
		PaneModule,
		SidebarModule,
		LogoModule,
		CodeSnippetModule,
	],
	declarations: [
		AUIDemoModalComponent,
		Pages,
	],
	entryComponents: [
		AUIDemoModalComponent,
	],
})
export class LayoutExamplesModule {}