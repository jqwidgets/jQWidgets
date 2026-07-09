/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />

import '../jqwidgets/jqxcore.js';

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxChat',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxChatComponent implements OnChanges
{
   @Input('accentColor') attrAccentColor: string;
   @Input('apiKey') attrApiKey: string;
   @Input('botAvatar') attrBotAvatar: string;
   @Input('botName') attrBotName: string;
   @Input('colorScheme') attrColorScheme: string;
   @Input('disabled') attrDisabled: boolean;
   @Input('enableClear') attrEnableClear: boolean;
   @Input('enableCopyCode') attrEnableCopyCode: boolean;
   @Input('enableStop') attrEnableStop: boolean;
   @Input('headers') attrHeaders: object;
   @Input('launcherIcon') attrLauncherIcon: string;
   @Input('launcherPosition') attrLauncherPosition: string;
   @Input('maxTokens') attrMaxTokens: number;
   @Input('messages') attrMessages: jqwidgets.ChatMessage[];
   @Input('mode') attrMode: string;
   @Input('model') attrModel: string;
   @Input('open') attrOpen: boolean;
   @Input('placeHolder') attrPlaceHolder: string;
   @Input('provider') attrProvider: string;
   @Input('proxyUrl') attrProxyUrl: string;
   @Input('rtl') attrRtl: boolean;
   @Input('sendButtonIcon') attrSendButtonIcon: boolean;
   @Input('sendButtonLabel') attrSendButtonLabel: string;
   @Input('sendRequest') attrSendRequest: any;
   @Input('showAvatars') attrShowAvatars: boolean;
   @Input('showHeader') attrShowHeader: boolean;
   @Input('showHeaderAvatar') attrShowHeaderAvatar: boolean;
   @Input('showTimestamps') attrShowTimestamps: boolean;
   @Input('starterPrompts') attrStarterPrompts: string[];
   @Input('statusText') attrStatusText: string;
   @Input('stream') attrStream: boolean;
   @Input('subtitle') attrSubtitle: string;
   @Input('system') attrSystem: string;
   @Input('theme') attrTheme: string;
   @Input('title') attrTitle: string;
   @Input('typingIndicator') attrTypingIndicator: boolean;
   @Input('userAvatar') attrUserAvatar: string;
   @Input('userName') attrUserName: string;
   @Input('welcomeMessage') attrWelcomeMessage: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['accentColor','apiKey','botAvatar','botName','colorScheme','disabled','enableClear','enableCopyCode','enableStop','headers','height','launcherIcon','launcherPosition','maxTokens','messages','mode','model','open','placeHolder','provider','proxyUrl','rtl','sendButtonIcon','sendButtonLabel','sendRequest','showAvatars','showHeader','showHeaderAvatar','showTimestamps','starterPrompts','statusText','stream','subtitle','system','theme','title','typingIndicator','userAvatar','userName','welcomeMessage','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxChat;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxChat(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxChat(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxChat(this.properties[i])) {
                  this.host.jqxChat(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (this.host) {
         return;
      }
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxChat', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxChat('setOptions', options);
   }

   // jqxChatComponent properties
   accentColor(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('accentColor', arg);
      } else {
          return this.host.jqxChat('accentColor');
      }
   }

   apiKey(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('apiKey', arg);
      } else {
          return this.host.jqxChat('apiKey');
      }
   }

   botAvatar(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('botAvatar', arg);
      } else {
          return this.host.jqxChat('botAvatar');
      }
   }

   botName(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('botName', arg);
      } else {
          return this.host.jqxChat('botName');
      }
   }

   colorScheme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('colorScheme', arg);
      } else {
          return this.host.jqxChat('colorScheme');
      }
   }

   disabled(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('disabled', arg);
      } else {
          return this.host.jqxChat('disabled');
      }
   }

   enableClear(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('enableClear', arg);
      } else {
          return this.host.jqxChat('enableClear');
      }
   }

   enableCopyCode(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('enableCopyCode', arg);
      } else {
          return this.host.jqxChat('enableCopyCode');
      }
   }

   enableStop(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('enableStop', arg);
      } else {
          return this.host.jqxChat('enableStop');
      }
   }

   headers(arg?: any): any {
      if (arg !== undefined) {
          this.host.jqxChat('headers', arg);
      } else {
          return this.host.jqxChat('headers');
      }
   }

   height(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxChat('height', arg);
      } else {
          return this.host.jqxChat('height');
      }
   }

   launcherIcon(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('launcherIcon', arg);
      } else {
          return this.host.jqxChat('launcherIcon');
      }
   }

   launcherPosition(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('launcherPosition', arg);
      } else {
          return this.host.jqxChat('launcherPosition');
      }
   }

   maxTokens(arg?: number): number {
      if (arg !== undefined) {
          this.host.jqxChat('maxTokens', arg);
      } else {
          return this.host.jqxChat('maxTokens');
      }
   }

   messages(arg?: jqwidgets.ChatMessage[]): jqwidgets.ChatMessage[] {
      if (arg !== undefined) {
          this.host.jqxChat('messages', arg);
      } else {
          return this.host.jqxChat('messages');
      }
   }

   mode(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('mode', arg);
      } else {
          return this.host.jqxChat('mode');
      }
   }

   model(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('model', arg);
      } else {
          return this.host.jqxChat('model');
      }
   }

   open(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('open', arg);
      } else {
          return this.host.jqxChat('open');
      }
   }

   placeHolder(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('placeHolder', arg);
      } else {
          return this.host.jqxChat('placeHolder');
      }
   }

   provider(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('provider', arg);
      } else {
          return this.host.jqxChat('provider');
      }
   }

   proxyUrl(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('proxyUrl', arg);
      } else {
          return this.host.jqxChat('proxyUrl');
      }
   }

   rtl(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('rtl', arg);
      } else {
          return this.host.jqxChat('rtl');
      }
   }

   sendButtonIcon(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('sendButtonIcon', arg);
      } else {
          return this.host.jqxChat('sendButtonIcon');
      }
   }

   sendButtonLabel(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('sendButtonLabel', arg);
      } else {
          return this.host.jqxChat('sendButtonLabel');
      }
   }

   sendRequest(arg?: undefined): undefined {
      if (arg !== undefined) {
          this.host.jqxChat('sendRequest', arg);
      } else {
          return this.host.jqxChat('sendRequest');
      }
   }

   showAvatars(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('showAvatars', arg);
      } else {
          return this.host.jqxChat('showAvatars');
      }
   }

   showHeader(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('showHeader', arg);
      } else {
          return this.host.jqxChat('showHeader');
      }
   }

   showHeaderAvatar(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('showHeaderAvatar', arg);
      } else {
          return this.host.jqxChat('showHeaderAvatar');
      }
   }

   showTimestamps(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('showTimestamps', arg);
      } else {
          return this.host.jqxChat('showTimestamps');
      }
   }

   starterPrompts(arg?: string[]): string[] {
      if (arg !== undefined) {
          this.host.jqxChat('starterPrompts', arg);
      } else {
          return this.host.jqxChat('starterPrompts');
      }
   }

   statusText(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('statusText', arg);
      } else {
          return this.host.jqxChat('statusText');
      }
   }

   stream(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('stream', arg);
      } else {
          return this.host.jqxChat('stream');
      }
   }

   subtitle(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('subtitle', arg);
      } else {
          return this.host.jqxChat('subtitle');
      }
   }

   system(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('system', arg);
      } else {
          return this.host.jqxChat('system');
      }
   }

   theme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('theme', arg);
      } else {
          return this.host.jqxChat('theme');
      }
   }

   title(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('title', arg);
      } else {
          return this.host.jqxChat('title');
      }
   }

   typingIndicator(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxChat('typingIndicator', arg);
      } else {
          return this.host.jqxChat('typingIndicator');
      }
   }

   userAvatar(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('userAvatar', arg);
      } else {
          return this.host.jqxChat('userAvatar');
      }
   }

   userName(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('userName', arg);
      } else {
          return this.host.jqxChat('userName');
      }
   }

   welcomeMessage(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxChat('welcomeMessage', arg);
      } else {
          return this.host.jqxChat('welcomeMessage');
      }
   }

   width(arg?: string | number): string | number {
      if (arg !== undefined) {
          this.host.jqxChat('width', arg);
      } else {
          return this.host.jqxChat('width');
      }
   }


   // jqxChatComponent functions
   sendMessage(text?: string): void {
      this.host.jqxChat('sendMessage', text);
   }

   stop(): void {
      this.host.jqxChat('stop');
   }

   addMessage(role: string, content: string): void {
      this.host.jqxChat('addMessage', role, content);
   }

   appendDelta(delta: string): void {
      this.host.jqxChat('appendDelta', delta);
   }

   getMessages(): jqwidgets.ChatMessage[] {
      return this.host.jqxChat('getMessages');
   }

   clearConversation(): void {
      this.host.jqxChat('clearConversation');
   }

   focus(): void {
      this.host.jqxChat('focus');
   }

   openPopup(): void {
      this.host.jqxChat('openPopup');
   }

   closePopup(): void {
      this.host.jqxChat('closePopup');
   }

   toggle(): void {
      this.host.jqxChat('toggle');
   }

   val(value?: undefined): any {
      if (value !== undefined) {
         return this.host.jqxChat('val', value);
      } else {
         return this.host.jqxChat('val');
      }
   };

   render(): void {
      this.host.jqxChat('render');
   }

   refresh(): void {
      this.host.jqxChat('refresh');
   }

   destroy(): void {
      this.host.jqxChat('destroy');
   }


   // jqxChatComponent events
   @Output() onMessageSent = new EventEmitter();
   @Output() onResponseStart = new EventEmitter();
   @Output() onResponseDelta = new EventEmitter();
   @Output() onMessageReceived = new EventEmitter();
   @Output() onResponseEnd = new EventEmitter();
   @Output() onError = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onStop = new EventEmitter();
   @Output() onCreate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('messageSent', (eventData: any) => { this.onMessageSent.emit(eventData); });
      this.host.on('responseStart', (eventData: any) => { this.onResponseStart.emit(eventData); });
      this.host.on('responseDelta', (eventData: any) => { this.onResponseDelta.emit(eventData); });
      this.host.on('messageReceived', (eventData: any) => { this.onMessageReceived.emit(eventData); });
      this.host.on('responseEnd', (eventData: any) => { this.onResponseEnd.emit(eventData); });
      this.host.on('error', (eventData: any) => { this.onError.emit(eventData); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('stop', (eventData: any) => { this.onStop.emit(eventData); });
      this.host.on('create', (eventData: any) => { this.onCreate.emit(eventData); });
   }

} //jqxChatComponent


