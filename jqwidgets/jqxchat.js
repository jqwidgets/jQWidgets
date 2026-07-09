/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/* tslint:disable */
/* eslint-disable */
(function () {
    if (typeof document === 'undefined') {
        return;
    }

    (function ($) {
        // inline SVG icons (inherit currentColor so they follow the theme).
        var ICONS = {
            send: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3 20.5l18.5-8.5L3 3.5v6.9l12 1.6-12 1.6z"/></svg>',
            stop: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
            plus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
            close: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
            chat: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.8 2 11.4c0 2.3 1.1 4.3 2.9 5.8L4 21l4.4-1.6c1.1.3 2.3.4 3.6.4 5.5 0 10-3.8 10-8.4S17.5 3 12 3z"/></svg>',
            down: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
            copy: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'
        };

        $.jqx.jqxWidget('jqxChat', '', {});

        $.extend($.jqx._jqxChat.prototype, {
            defineInstance: function () {
                var settings = {
                    // size
                    width: 400,
                    height: 580,
                    // appearance
                    rtl: false,
                    disabled: false,
                    title: 'AI Assistant',
                    subtitle: null,
                    showHeader: true,
                    placeHolder: 'Message the assistant...',
                    sendButtonLabel: 'Send',
                    // render the send button as an icon instead of a text label.
                    sendButtonIcon: true,
                    botName: 'Assistant',
                    userName: 'You',
                    botAvatar: null,
                    userAvatar: null,
                    showAvatars: true,
                    showTimestamps: true,
                    typingIndicator: true,
                    // show the assistant avatar in the header.
                    showHeaderAvatar: true,
                    // "online" status label shown under the title (null hides it).
                    statusText: 'Online',
                    // modern skin controls (independent of the jqWidgets theme):
                    // accent colour used for the send button, user bubbles and avatars.
                    accentColor: null,
                    // 'auto' (follow the OS), 'light' or 'dark'.
                    colorScheme: 'auto',
                    // header "new chat" action + (popup) close action.
                    enableClear: true,
                    // stop button while the assistant is generating.
                    enableStop: true,
                    // "Copy" button on fenced code blocks.
                    enableCopyCode: true,
                    // text shown above the starter prompts when the chat is empty.
                    welcomeMessage: null,
                    // clickable suggestions shown when the conversation is empty.
                    // e.g. ['Summarize this page', 'Draft a reply', 'Explain a concept']
                    starterPrompts: [],

                    // ===== display mode =====
                    // "inline" (embedded panel) or "popup" (floating launcher button).
                    mode: 'inline',
                    // popup corner: 'bottom-right' | 'bottom-left'.
                    launcherPosition: 'bottom-right',
                    // custom launcher icon markup (defaults to a chat bubble).
                    launcherIcon: null,
                    // whether the popup panel starts open.
                    open: false,

                    // ===== AI connection =====
                    // "anthropic" (Claude, default), "openai" or "custom".
                    provider: 'anthropic',
                    // your platform key. NEVER embed a production key in client code -
                    // route requests through your own backend via proxyUrl instead.
                    apiKey: '',
                    // model id. Defaults are filled in per-provider when left null.
                    model: null,
                    // system / developer instructions for the assistant.
                    system: 'You are a helpful assistant embedded in a web application.',
                    // upper bound on the response length.
                    maxTokens: 1024,
                    // stream tokens as they arrive (Server-Sent Events).
                    stream: true,
                    // when set, POST the request to this URL instead of calling the
                    // provider directly. The recommended approach for production:
                    // your backend holds the key and forwards to the provider.
                    proxyUrl: null,
                    // extra headers merged into the outgoing request.
                    headers: null,
                    // optional override: function (payload, widget) -> Promise|value.
                    // Lets a host app fully control transport (custom auth, SSE proxy,
                    // a fully offline mock, streaming via widget.appendDelta(), ...).
                    sendRequest: null,

                    // conversation seed: [{ role: 'user'|'assistant', content: '...' }]
                    messages: [],

                    // events (append-only: never reorder - handlers bind by name)
                    events: [
                        'create',          // 0
                        'messageSent',     // 1
                        'responseStart',   // 2
                        'responseDelta',   // 3
                        'messageReceived', // 4
                        'responseEnd',     // 5
                        'error',           // 6
                        'open',            // 7
                        'close',           // 8
                        'stop'             // 9
                    ]
                };
                if (this === $.jqx._jqxChat.prototype) {
                    return settings;
                }
                $.extend(true, this, settings);
                return settings;
            },

            createInstance: function (args) {
                var that = this;
                that._conversation = [];
                that._genId = 0;
                that._busy = false;
                that._atBottom = true;
                if ($.isArray(that.messages)) {
                    for (var i = 0; i < that.messages.length; i++) {
                        var m = that.messages[i];
                        if (m && m.role && typeof m.content === 'string') {
                            that._conversation.push({ role: m.role, content: m.content });
                        }
                    }
                }
                that._render(true);
                that._raiseEvent('0'); // create
            },

            // ============================= rendering =============================
            render: function () {
                this._render(false);
            },

            refresh: function (initialRefresh) {
                if (initialRefresh !== true) {
                    this._sizeElements();
                }
            },

            _render: function (initialization) {
                var that = this;

                if (initialization) {
                    that.host.empty();
                    // keep only the base jqx-widget hook (font); the modern skin
                    // owns colours/shape via jqx-chat-* so it doesn't inherit the
                    // flat theme fills.
                    that.host.addClass(that.toThemeProperty('jqx-widget'));
                    that.host.addClass('jqx-chat');

                    // ---- header ----
                    that._header = $('<div class="jqx-chat-header"></div>');
                    that._headerAvatar = $('<div class="jqx-chat-headavatar"></div>');
                    var titleBox = $('<div class="jqx-chat-titlebox"></div>');
                    that._headerTitle = $('<div class="jqx-chat-title"></div>');
                    that._headerSubtitle = $('<div class="jqx-chat-subtitle"><span class="jqx-chat-status"></span><span class="jqx-chat-subtitle-text"></span></div>');
                    titleBox.append(that._headerTitle).append(that._headerSubtitle);

                    that._headerActions = $('<div class="jqx-chat-actions"></div>');
                    that._clearButton = $('<button type="button" title="New chat" class="jqx-chat-iconbtn">' + ICONS.plus + '</button>');
                    that._closeButton = $('<button type="button" title="Close" class="jqx-chat-iconbtn">' + ICONS.close + '</button>');
                    that._headerActions.append(that._clearButton).append(that._closeButton);
                    that._header.append(that._headerAvatar).append(titleBox).append(that._headerActions);

                    // ---- body ----
                    that._body = $('<div class="jqx-chat-body"></div>');
                    that._scrollBtn = $('<button type="button" title="Scroll to latest" class="jqx-chat-scrollbtn">' + ICONS.down + '</button>');
                    that._scrollBtn.hide();

                    // ---- footer (pill input + round send) ----
                    that._footer = $('<div class="jqx-chat-footer"></div>');
                    that._inputWrap = $('<div class="jqx-chat-inputwrap"></div>');
                    that._input = $('<textarea rows="1" class="jqx-chat-input"></textarea>');
                    that._sendButton = $('<button type="button" class="jqx-chat-send"></button>');
                    that._inputWrap.append(that._input).append(that._sendButton);
                    that._footer.append(that._inputWrap);

                    var wrapper = $('<div class="jqx-chat-bodywrap"></div>');
                    wrapper.append(that._body).append(that._scrollBtn);
                    that.host.append(that._header).append(wrapper).append(that._footer);

                    // seed existing conversation into the view.
                    for (var i = 0; i < that._conversation.length; i++) {
                        that._appendMessage(that._conversation[i].role, that._conversation[i].content, false);
                    }

                    that._setupMode();
                }

                that._applyScheme();
                that._headerTitle.text(that.title);
                that._renderHeaderAvatar();
                var subText = that.subtitle || (that.statusText || '');
                if (subText) {
                    that._headerSubtitle.find('.jqx-chat-subtitle-text').text(subText);
                    that._headerSubtitle.find('.jqx-chat-status').css('display', that.statusText ? '' : 'none');
                    that._headerSubtitle.show();
                } else {
                    that._headerSubtitle.hide();
                }
                that._header.css('display', that.showHeader ? '' : 'none');
                that._clearButton.css('display', that.enableClear ? '' : 'none');
                that._closeButton.css('display', that.mode === 'popup' ? '' : 'none');
                that._input.attr('placeholder', that.placeHolder);
                that._renderSendButton(false);

                that._applyRtl();
                that._applyDisabled();
                that._updateEmptyState();
                that._sizeElements();
                that._removeHandlers();
                that._addHandlers();
                that._scrollToBottom(true);
            },

            // applies the light/dark scheme class and accent colour variable.
            _applyScheme: function () {
                var that = this;
                that.host.removeClass('jqx-chat-scheme-auto jqx-chat-scheme-light jqx-chat-scheme-dark');
                var scheme = (that.colorScheme || 'auto').toLowerCase();
                that.host.addClass('jqx-chat-scheme-' + (scheme === 'dark' ? 'dark' : scheme === 'light' ? 'light' : 'auto'));
                if (that.accentColor) {
                    that.host.css('--jqxchat-accent', that.accentColor);
                    that.host.css('--jqxchat-accent-2', that.accentColor);
                    if (that._launcher) {
                        that._launcher.css('--jqxchat-accent', that.accentColor);
                        that._launcher.css('--jqxchat-accent-2', that.accentColor);
                    }
                }
            },

            _renderHeaderAvatar: function () {
                var that = this;
                if (!that._headerAvatar) { return; }
                if (!that.showHeaderAvatar) {
                    that._headerAvatar.hide();
                    return;
                }
                that._headerAvatar.show().empty();
                if (that.botAvatar) {
                    that._headerAvatar.append($('<img/>').attr('src', that.botAvatar));
                } else {
                    that._headerAvatar.text(that.botName.toString().charAt(0).toUpperCase());
                }
            },

            _renderSendButton: function (stopState) {
                var that = this;
                if (stopState) {
                    that._sendButton.html(ICONS.stop).attr('title', 'Stop generating').addClass('jqx-chat-send-stop');
                } else {
                    that._sendButton.removeClass('jqx-chat-send-stop').attr('title', that.sendButtonLabel);
                    if (that.sendButtonIcon) {
                        that._sendButton.html(ICONS.send).addClass('jqx-chat-send-icon');
                    } else {
                        that._sendButton.removeClass('jqx-chat-send-icon').text(that.sendButtonLabel);
                    }
                }
            },

            _setupMode: function () {
                var that = this;
                if (that.mode === 'popup') {
                    that.host.addClass('jqx-chat-popup jqx-chat-' + that.launcherPosition);

                    var scheme = 'jqx-chat-scheme-' + ((that.colorScheme || 'auto').toLowerCase());
                    var icon = that.launcherIcon || ICONS.chat;
                    that._launcher = $('<button type="button" title="' + that.title + '" class="jqx-chat-launcher '
                        + scheme + ' jqx-chat-' + that.launcherPosition + '">' + icon + '</button>');
                    $(document.body).append(that._launcher);

                    if (that.open) {
                        that.host.show();
                        that._launcher.hide();
                    } else {
                        that.host.hide();
                    }
                } else {
                    that.host.removeClass('jqx-chat-popup');
                }
            },

            _sizeElements: function () {
                var that = this;
                that.host.width(that.width);
                that.host.height(that.height);

                var headerH = that.showHeader ? that._header.outerHeight() : 0;
                var footerH = that._footer.outerHeight();
                var total = that.host.height();
                var bodyH = total - headerH - footerH;
                if (bodyH < 0) {
                    bodyH = 0;
                }
                that._body.height(bodyH);
            },

            _applyRtl: function () {
                var that = this;
                if (that.rtl) {
                    that.host.addClass('jqx-rtl jqx-chat-rtl').attr('dir', 'rtl');
                } else {
                    that.host.removeClass('jqx-rtl jqx-chat-rtl').removeAttr('dir');
                }
            },

            _applyDisabled: function () {
                var that = this;
                if (that.disabled) {
                    that.host.addClass('jqx-chat-disabled');
                    that._input.attr('disabled', 'disabled');
                    that._sendButton.attr('disabled', 'disabled');
                } else {
                    that.host.removeClass('jqx-chat-disabled');
                    that._input.removeAttr('disabled');
                    if (!that._busy) {
                        that._sendButton.removeAttr('disabled');
                    }
                }
            },

            // ============================= handlers =============================
            _addHandlers: function () {
                var that = this;
                var id = that.element.id;
                var ns = '.jqxChat' + id;

                that.addHandler(that._sendButton, 'click' + ns, function () {
                    if (that.disabled) {
                        return;
                    }
                    if (that._busy) {
                        that.stop();
                    } else {
                        that.sendMessage();
                    }
                });

                that.addHandler(that._input, 'keydown' + ns, function (event) {
                    // Enter sends, Shift+Enter inserts a newline.
                    if (event.keyCode === 13 && !event.shiftKey) {
                        event.preventDefault();
                        if (!that.disabled && !that._busy) {
                            that.sendMessage();
                        }
                    }
                });

                that.addHandler(that._input, 'input' + ns, function () {
                    that._autoGrow();
                });

                that.addHandler(that._clearButton, 'click' + ns, function () {
                    that.clearConversation();
                    that.focus();
                });

                that.addHandler(that._closeButton, 'click' + ns, function () {
                    that.close();
                });

                that.addHandler(that._scrollBtn, 'click' + ns, function () {
                    that._scrollToBottom(true);
                });

                // track scroll position to toggle the jump-to-bottom button.
                that.addHandler(that._body, 'scroll' + ns, function () {
                    that._onBodyScroll();
                });

                // delegated: starter prompt chips.
                that.addHandler(that._body, 'click' + ns, function (event) {
                    var chip = $(event.target).closest('.jqx-chat-starter');
                    if (chip.length) {
                        var prompt = chip.attr('data-prompt') || chip.text();
                        if (!that.disabled && !that._busy) {
                            that.sendMessage(prompt);
                        }
                        return;
                    }
                    // delegated: copy-code buttons.
                    var copyBtn = $(event.target).closest('.jqx-chat-copy');
                    if (copyBtn.length) {
                        that._copyCode(copyBtn);
                    }
                });

                // send-button hover / press affordance.
                that.addHandler(that._sendButton, 'mouseenter' + ns, function () {
                    if (!that.disabled && !that._busy) {
                        $(this).addClass(that.toThemeProperty('jqx-fill-state-hover'));
                    }
                });
                that.addHandler(that._sendButton, 'mouseleave' + ns, function () {
                    $(this).removeClass(that.toThemeProperty('jqx-fill-state-hover'));
                });

                if (that._launcher) {
                    that.addHandler(that._launcher, 'click' + ns, function () {
                        that.toggle();
                    });
                }
            },

            _removeHandlers: function () {
                var that = this;
                var ns = '.jqxChat' + that.element.id;
                if (that._sendButton) { that.removeHandler(that._sendButton, 'click' + ns); that.removeHandler(that._sendButton, 'mouseenter' + ns); that.removeHandler(that._sendButton, 'mouseleave' + ns); }
                if (that._input) { that.removeHandler(that._input, 'keydown' + ns); that.removeHandler(that._input, 'input' + ns); }
                if (that._clearButton) { that.removeHandler(that._clearButton, 'click' + ns); }
                if (that._closeButton) { that.removeHandler(that._closeButton, 'click' + ns); }
                if (that._scrollBtn) { that.removeHandler(that._scrollBtn, 'click' + ns); }
                if (that._body) { that.removeHandler(that._body, 'scroll' + ns); that.removeHandler(that._body, 'click' + ns); }
                if (that._launcher) { that.removeHandler(that._launcher, 'click' + ns); }
            },

            _autoGrow: function () {
                var that = this;
                var el = that._input[0];
                el.style.height = 'auto';
                el.style.height = Math.min(el.scrollHeight, 120) + 'px';
            },

            _onBodyScroll: function () {
                var that = this;
                var el = that._body[0];
                var nearBottom = (el.scrollHeight - el.scrollTop - el.clientHeight) < 40;
                that._atBottom = nearBottom;
                that._scrollBtn.css('display', nearBottom ? 'none' : '');
            },

            // ============================= public API =============================
            // sends the current input (or an explicit text) to the assistant.
            sendMessage: function (text) {
                var that = this;
                if (that._busy) {
                    return;
                }
                if (text === undefined || text === null) {
                    text = that._input.val();
                }
                text = (text || '').toString();
                if (!text.replace(/\s/g, '').length) {
                    return;
                }

                that._input.val('');
                that._autoGrow();

                that.addMessage('user', text);
                that._raiseEvent('1', { role: 'user', content: text }); // messageSent

                if (typeof that.sendRequest !== 'function'
                    && (typeof that.apiKey !== 'string' || (!that.apiKey.length && !that.proxyUrl))) {
                    that._handleError(new Error('No apiKey, proxyUrl or sendRequest configured. ' +
                        'Set the "apiKey" property (or "proxyUrl" / "sendRequest") to connect the chat to your platform.'));
                    return;
                }

                that._sendToProvider();
            },

            // stops the in-flight generation, keeping whatever has streamed so far.
            stop: function () {
                var that = this;
                if (!that._busy) {
                    return;
                }
                that._genId++; // invalidate any late callbacks from this generation.
                if (that._abort) {
                    try { that._abort.abort(); } catch (e) { }
                    that._abort = null;
                }
                that._hideTyping();
                // persist any partially streamed assistant text.
                if (that._streamBubble && that._streamText && that._streamText.length) {
                    that._conversation.push({ role: 'assistant', content: that._streamText });
                }
                that._streamBubble = null;
                that._streamText = '';
                that._setBusy(false);
                that._raiseEvent('9'); // stop
                that.focus();
            },

            // appends a message to the view and conversation history.
            addMessage: function (role, content) {
                var that = this;
                that._conversation.push({ role: role, content: content });
                that._appendMessage(role, content, true);
                that._updateEmptyState();
            },

            // returns a copy of the conversation history sent to / from the model.
            getMessages: function () {
                return this._conversation.slice();
            },

            clearConversation: function () {
                var that = this;
                if (that._busy) {
                    that.stop();
                }
                that._conversation = [];
                that._body.empty();
                that._updateEmptyState();
                that._scrollToBottom(true);
            },

            focus: function () {
                var that = this;
                setTimeout(function () {
                    if (that.mode !== 'popup' || that.open) {
                        that._input.focus();
                    }
                }, 0);
            },

            // ----- popup control -----
            openPopup: function () { this.open = true; this._togglePanel(true); },
            closePopup: function () { this.open = false; this._togglePanel(false); },
            close: function () { this.closePopup(); },
            toggle: function () { this.open = !this.open; this._togglePanel(this.open); },

            _togglePanel: function (show) {
                var that = this;
                if (that.mode !== 'popup') {
                    return;
                }
                if (show) {
                    that.host.show();
                    if (that._launcher) { that._launcher.hide(); }
                    that._sizeElements();
                    that._scrollToBottom(true);
                    that.focus();
                    that._raiseEvent('7'); // open
                } else {
                    that.host.hide();
                    if (that._launcher) { that._launcher.show(); }
                    that._raiseEvent('8'); // close
                }
            },

            val: function () {
                return this.getMessages();
            },

            // ============================= view helpers =============================
            _appendMessage: function (role, content, animate) {
                var that = this;
                var isUser = role === 'user';

                var row = $('<div class="' + that.toThemeProperty('jqx-chat-message') + ' '
                    + (isUser ? that.toThemeProperty('jqx-chat-message-user') : that.toThemeProperty('jqx-chat-message-bot')) + '"></div>');
                if (animate) {
                    row.addClass(that.toThemeProperty('jqx-chat-enter'));
                }

                if (that.showAvatars) {
                    var avatarSrc = isUser ? that.userAvatar : that.botAvatar;
                    var avatar;
                    if (avatarSrc) {
                        avatar = $('<img class="jqx-chat-avatar" />').attr('src', avatarSrc);
                    } else {
                        var initials = (isUser ? that.userName : that.botName).toString().charAt(0).toUpperCase();
                        avatar = $('<div class="jqx-chat-avatar '
                            + (isUser ? 'jqx-chat-avatar-user' : 'jqx-chat-avatar-bot') + '"></div>').text(initials);
                    }
                    row.append(avatar);
                }

                var col = $('<div class="jqx-chat-message-content"></div>');

                if (that.showTimestamps || (isUser ? that.userName : that.botName)) {
                    var meta = $('<div class="jqx-chat-meta"></div>');
                    meta.append($('<span class="jqx-chat-author"></span>').text(isUser ? that.userName : that.botName));
                    if (that.showTimestamps) {
                        meta.append($('<span class="jqx-chat-time"></span>').text(that._formatTime(new Date())));
                    }
                    col.append(meta);
                }

                var bubble = $('<div class="jqx-chat-bubble '
                    + (isUser ? 'jqx-chat-bubble-user' : 'jqx-chat-bubble-bot') + '"></div>');
                bubble.html(that._formatContent(content));

                col.append(bubble);
                row.append(col);
                that._body.append(row);
                that._scrollToBottom(false);

                return bubble;
            },

            // ---- empty state (welcome + starter prompts) ----
            _updateEmptyState: function () {
                var that = this;
                var hasMessages = that._conversation.length > 0;
                if (hasMessages) {
                    if (that._empty) { that._empty.remove(); that._empty = null; }
                    return;
                }
                if (that._empty) {
                    return;
                }
                that._empty = $('<div class="jqx-chat-empty"></div>');
                var icon = $('<div class="jqx-chat-empty-icon">' + ICONS.chat + '</div>');
                that._empty.append(icon);
                if (that.welcomeMessage) {
                    that._empty.append($('<div class="jqx-chat-empty-text"></div>')
                        .html(that._formatContent(that.welcomeMessage)));
                }
                if ($.isArray(that.starterPrompts) && that.starterPrompts.length) {
                    var chips = $('<div class="jqx-chat-starters"></div>');
                    for (var i = 0; i < that.starterPrompts.length; i++) {
                        var p = that.starterPrompts[i];
                        var chip = $('<button type="button" class="jqx-chat-starter"></button>')
                            .attr('data-prompt', p).text(p);
                        chips.append(chip);
                    }
                    that._empty.append(chips);
                }
                that._body.append(that._empty);
            },

            // ---- safe, lightweight Markdown rendering ----
            _formatContent: function (text) {
                var that = this;
                var store = [];
                var stash = function (html) {
                    store.push(html);
                    return '￼' + (store.length - 1) + '￼';
                };
                var s = that._escapeHtml(text);

                // fenced code blocks (with a copy button when enabled).
                s = s.replace(/```(?:[a-zA-Z0-9_+-]*)?\n?([\s\S]*?)```/g, function (all, code) {
                    var copy = that.enableCopyCode
                        ? '<button type="button" class="' + that.toThemeProperty('jqx-chat-copy') + '">' + ICONS.copy + '<span>Copy</span></button>'
                        : '';
                    return stash('<div class="' + that.toThemeProperty('jqx-chat-code-wrap') + '">' + copy
                        + '<pre class="' + that.toThemeProperty('jqx-chat-code') + '"><code>' + code.replace(/\n$/, '') + '</code></pre></div>');
                });
                // inline code.
                s = s.replace(/`([^`]+)`/g, function (all, code) {
                    return stash('<code class="' + that.toThemeProperty('jqx-chat-inline-code') + '">' + code + '</code>');
                });
                // links [label](https://...)
                s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (all, label, url) {
                    return stash('<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="'
                        + that.toThemeProperty('jqx-chat-link') + '">' + label + '</a>');
                });
                // bold then italic.
                s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
                // newlines.
                s = s.replace(/\n/g, '<br/>');
                // restore protected fragments.
                s = s.replace(/￼(\d+)￼/g, function (all, n) {
                    return store[parseInt(n, 10)];
                });
                return s;
            },

            _copyCode: function (btn) {
                var that = this;
                var pre = btn.closest('.jqx-chat-code-wrap').find('pre')[0];
                if (!pre) { return; }
                var code = pre.textContent || pre.innerText || '';
                var done = function () {
                    var label = btn.find('span');
                    var prev = label.text();
                    label.text('Copied');
                    setTimeout(function () { label.text(prev || 'Copy'); }, 1400);
                };
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(code).then(done, function () { });
                } else {
                    var ta = document.createElement('textarea');
                    ta.value = code; document.body.appendChild(ta); ta.select();
                    try { document.execCommand('copy'); done(); } catch (e) { }
                    document.body.removeChild(ta);
                }
            },

            _escapeHtml: function (text) {
                return (text === null || text === undefined ? '' : text.toString())
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            },

            _formatTime: function (date) {
                var h = date.getHours();
                var m = date.getMinutes();
                return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
            },

            _scrollToBottom: function (force) {
                var that = this;
                if (!that._body || !that._body[0]) {
                    return;
                }
                if (force || that._atBottom) {
                    that._body[0].scrollTop = that._body[0].scrollHeight;
                    that._atBottom = true;
                    that._scrollBtn.hide();
                }
            },

            _showTyping: function () {
                var that = this;
                if (!that.typingIndicator || that._typingRow) {
                    return;
                }
                that._typingRow = $('<div class="jqx-chat-message jqx-chat-message-bot"></div>');
                if (that.showAvatars) {
                    if (that.botAvatar) {
                        that._typingRow.append($('<img class="jqx-chat-avatar" />').attr('src', that.botAvatar));
                    } else {
                        var initials = that.botName.toString().charAt(0).toUpperCase();
                        that._typingRow.append($('<div class="jqx-chat-avatar jqx-chat-avatar-bot"></div>').text(initials));
                    }
                }
                var dots = '<div class="jqx-chat-typing"><span></span><span></span><span></span></div>';
                that._typingRow.append($('<div class="jqx-chat-message-content">' + dots + '</div>'));
                that._body.append(that._typingRow);
                that._scrollToBottom(false);
            },

            _hideTyping: function () {
                var that = this;
                if (that._typingRow) {
                    that._typingRow.remove();
                    that._typingRow = null;
                }
            },

            _setBusy: function (busy) {
                var that = this;
                that._busy = busy;
                if (busy) {
                    that.host.addClass('jqx-chat-busy');
                    if (that.enableStop) {
                        that._renderSendButton(true); // show stop
                    } else {
                        that._sendButton.attr('disabled', 'disabled');
                    }
                } else {
                    that.host.removeClass('jqx-chat-busy');
                    that._renderSendButton(false);
                    if (!that.disabled) {
                        that._sendButton.removeAttr('disabled');
                    }
                }
            },

            // ============================= transport =============================
            _sendToProvider: function () {
                var that = this;
                that._setBusy(true);
                that._streamBubble = null;
                that._streamText = '';
                var gen = ++that._genId;
                that._raiseEvent('2'); // responseStart

                var adapter = that._getAdapter();
                var payload = adapter.buildPayload(that);

                // host-supplied transport wins. It may either return the final text
                // (Promise or value) or drive streaming via widget.appendDelta().
                if (typeof that.sendRequest === 'function') {
                    that._showTyping();
                    try {
                        var result = that.sendRequest(payload, that);
                        $.when(result).done(function (responseText) {
                            if (gen !== that._genId) { return; }
                            // if the callback streamed via appendDelta, the bubble is
                            // already populated; finalize with the accumulated text.
                            if (that._streamBubble && (responseText === undefined || responseText === null)) {
                                that._endStream(gen);
                            } else {
                                that._finishResponse(gen, responseText);
                            }
                        }).fail(function (err) {
                            if (gen === that._genId) { that._handleError(err); }
                        });
                    } catch (e) {
                        that._handleError(e);
                    }
                    return;
                }

                var url = that.proxyUrl || adapter.url;
                var headers = adapter.buildHeaders(that);
                if (that.headers) {
                    headers = $.extend({}, headers, that.headers);
                }

                that._abort = (typeof AbortController !== 'undefined') ? new AbortController() : null;

                if (that.stream && window.fetch && window.ReadableStream) {
                    that._streamFetch(gen, url, headers, payload, adapter);
                } else {
                    that._plainFetch(gen, url, headers, payload, adapter);
                }
            },

            // lets a custom sendRequest push streamed tokens into the current bubble.
            appendDelta: function (delta) {
                var that = this;
                // ignore late tokens after the generation was stopped / superseded.
                if (!delta || !that._busy) { return; }
                that._hideTyping();
                if (!that._streamBubble) {
                    that._streamBubble = that._appendMessage('assistant', '', true);
                    that._streamText = '';
                }
                that._streamText += delta;
                that._streamBubble.html(that._formatContent(that._streamText));
                that._scrollToBottom(false);
                that._raiseEvent('3', { delta: delta, content: that._streamText }); // responseDelta
            },

            _plainFetch: function (gen, url, headers, payload, adapter) {
                var that = this;
                var body = $.extend({}, payload);
                body.stream = false;
                that._showTyping();

                fetch(url, {
                    method: 'POST', headers: headers, body: JSON.stringify(body),
                    signal: that._abort ? that._abort.signal : undefined
                }).then(function (response) {
                    if (!response.ok) {
                        return response.text().then(function (t) { throw new Error('HTTP ' + response.status + ': ' + t); });
                    }
                    return response.json();
                }).then(function (json) {
                    if (gen !== that._genId) { return; }
                    that._finishResponse(gen, adapter.parseResponse(json));
                }).catch(function (err) {
                    if (err && err.name === 'AbortError') { return; }
                    if (gen === that._genId) { that._handleError(err); }
                });
            },

            _streamFetch: function (gen, url, headers, payload, adapter) {
                var that = this;
                var body = $.extend({}, payload);
                body.stream = true;
                that._showTyping();

                fetch(url, {
                    method: 'POST', headers: headers, body: JSON.stringify(body),
                    signal: that._abort ? that._abort.signal : undefined
                }).then(function (response) {
                    if (!response.ok || !response.body) {
                        return response.text().then(function (t) { throw new Error('HTTP ' + response.status + ': ' + t); });
                    }

                    var reader = response.body.getReader();
                    var decoder = new TextDecoder('utf-8');
                    var buffer = '';

                    var pump = function () {
                        return reader.read().then(function (chunk) {
                            if (gen !== that._genId) { return; }
                            if (chunk.done) {
                                that._endStream(gen);
                                return;
                            }
                            buffer += decoder.decode(chunk.value, { stream: true });
                            var lines = buffer.split('\n');
                            buffer = lines.pop();

                            for (var i = 0; i < lines.length; i++) {
                                var line = lines[i].replace(/\r$/, '');
                                if (line.indexOf('data:') !== 0) { continue; }
                                var data = line.slice(5).trim();
                                if (!data.length || data === '[DONE]') { continue; }
                                var delta;
                                try { delta = adapter.parseStreamChunk(JSON.parse(data)); }
                                catch (e) { delta = ''; }
                                if (delta) { that.appendDelta(delta); }
                            }
                            return pump();
                        });
                    };
                    return pump();
                }).catch(function (err) {
                    if (err && err.name === 'AbortError') { return; }
                    that._hideTyping();
                    if (gen === that._genId) { that._handleError(err); }
                });
            },

            _endStream: function (gen) {
                var that = this;
                if (gen !== that._genId) { return; }
                that._hideTyping();
                var text = that._streamText || '';
                that._conversation.push({ role: 'assistant', content: text });
                that._streamBubble = null;
                that._streamText = '';
                that._setBusy(false);
                that._raiseEvent('4', { role: 'assistant', content: text }); // messageReceived
                that._raiseEvent('5', { content: text }); // responseEnd
                that.focus();
            },

            _finishResponse: function (gen, text) {
                var that = this;
                if (gen !== that._genId) { return; }
                that._hideTyping();
                text = (text === null || text === undefined) ? '' : text.toString();
                that.addMessage('assistant', text);
                that._streamBubble = null;
                that._streamText = '';
                that._setBusy(false);
                that._raiseEvent('4', { role: 'assistant', content: text }); // messageReceived
                that._raiseEvent('5', { content: text }); // responseEnd
                that.focus();
            },

            _handleError: function (err) {
                var that = this;
                that._hideTyping();
                that._setBusy(false);
                that._streamBubble = null;
                that._streamText = '';
                var message = (err && err.message) ? err.message : ('' + err);
                var handled = that._raiseEvent('6', { error: err, message: message }); // error
                if (handled !== false) {
                    var row = $('<div class="jqx-chat-message jqx-chat-message-bot"></div>');
                    var col = $('<div class="jqx-chat-message-content"></div>');
                    var bubble = $('<div class="jqx-chat-bubble jqx-chat-bubble-bot jqx-chat-error"></div>');
                    bubble.text(message);
                    col.append(bubble);
                    row.append(col);
                    that._body.append(row);
                    that._scrollToBottom(false);
                }
            },

            // ============================= provider adapters =============================
            _getAdapter: function () {
                var provider = (this.provider || 'anthropic').toLowerCase();
                var adapters = $.jqx._jqxChat.adapters;
                return adapters[provider] || adapters.anthropic;
            },

            // ============================= lifecycle =============================
            propertyChangedHandler: function (object, key, oldvalue, value) {
                if (oldvalue === value) {
                    return;
                }
                switch (key) {
                    case 'width':
                    case 'height':
                        object._sizeElements();
                        break;
                    case 'title':
                        object._headerTitle.text(value);
                        if (object._launcher) { object._launcher.attr('title', value); }
                        break;
                    case 'subtitle':
                    case 'statusText':
                        var subText = object.subtitle || (object.statusText || '');
                        if (subText) {
                            object._headerSubtitle.find('.jqx-chat-subtitle-text').text(subText);
                            object._headerSubtitle.find('.jqx-chat-status').css('display', object.statusText ? '' : 'none');
                            object._headerSubtitle.show();
                        } else {
                            object._headerSubtitle.hide();
                        }
                        break;
                    case 'accentColor':
                    case 'colorScheme':
                        object._applyScheme();
                        break;
                    case 'botName':
                    case 'botAvatar':
                    case 'showHeaderAvatar':
                        object._renderHeaderAvatar();
                        break;
                    case 'showHeader':
                        object._header.css('display', value ? '' : 'none');
                        object._sizeElements();
                        break;
                    case 'enableClear':
                        object._clearButton.css('display', value ? '' : 'none');
                        break;
                    case 'placeHolder':
                        object._input.attr('placeholder', value);
                        break;
                    case 'sendButtonLabel':
                    case 'sendButtonIcon':
                        object._renderSendButton(object._busy && object.enableStop);
                        break;
                    case 'disabled':
                        object._applyDisabled();
                        break;
                    case 'rtl':
                        object._applyRtl();
                        break;
                    case 'open':
                        object._togglePanel(value);
                        break;
                    case 'welcomeMessage':
                    case 'starterPrompts':
                        if (object._empty) { object._empty.remove(); object._empty = null; }
                        object._updateEmptyState();
                        break;
                    case 'theme':
                        $.jqx.utilities.setTheme(oldvalue, value, object.host);
                        if (object._launcher) { $.jqx.utilities.setTheme(oldvalue, value, object._launcher); }
                        break;
                    case 'messages':
                        object._conversation = [];
                        object._body.empty();
                        if ($.isArray(value)) {
                            for (var i = 0; i < value.length; i++) {
                                object._conversation.push({ role: value[i].role, content: value[i].content });
                                object._appendMessage(value[i].role, value[i].content, false);
                            }
                        }
                        object._updateEmptyState();
                        object._scrollToBottom(true);
                        break;
                }
            },

            destroy: function () {
                var that = this;
                if (that._busy) { that.stop(); }
                that._removeHandlers();
                if (that._launcher) { that._launcher.remove(); that._launcher = null; }
                that.host.removeClass();
                that.host.empty();
                that.host.remove();
            },

            _raiseEvent: function (id, args) {
                var that = this;
                if (args === undefined) {
                    args = {};
                }
                var evt = that.events[id];
                var event = new $.Event(evt);
                event.owner = that;
                args.owner = that;
                event.args = args;
                var result = that.host.trigger(event);
                return result;
            }
        });

        // ===================== provider adapters =====================
        // Each adapter maps the widget's neutral conversation onto a provider
        // request, and maps responses / SSE chunks back to plain text.
        $.jqx._jqxChat.adapters = {
            anthropic: {
                url: 'https://api.anthropic.com/v1/messages',
                buildHeaders: function (w) {
                    return {
                        'content-type': 'application/json',
                        'x-api-key': w.apiKey,
                        'anthropic-version': '2023-06-01',
                        // required to call the Anthropic API directly from a browser.
                        'anthropic-dangerous-direct-browser-access': 'true'
                    };
                },
                buildPayload: function (w) {
                    var messages = [];
                    for (var i = 0; i < w._conversation.length; i++) {
                        messages.push({ role: w._conversation[i].role, content: w._conversation[i].content });
                    }
                    var payload = {
                        model: w.model || 'claude-opus-4-8',
                        max_tokens: w.maxTokens,
                        messages: messages
                    };
                    if (w.system) { payload.system = w.system; }
                    return payload;
                },
                parseResponse: function (json) {
                    if (json && json.content && json.content.length) {
                        var text = '';
                        for (var i = 0; i < json.content.length; i++) {
                            if (json.content[i].type === 'text') { text += json.content[i].text; }
                        }
                        return text;
                    }
                    if (json && json.error) { throw new Error(json.error.message || 'Anthropic API error'); }
                    return '';
                },
                parseStreamChunk: function (json) {
                    if (json && json.type === 'content_block_delta' && json.delta && json.delta.type === 'text_delta') {
                        return json.delta.text || '';
                    }
                    if (json && json.type === 'error' && json.error) {
                        throw new Error(json.error.message || 'Anthropic API error');
                    }
                    return '';
                }
            },

            openai: {
                url: 'https://api.openai.com/v1/chat/completions',
                buildHeaders: function (w) {
                    return {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + w.apiKey
                    };
                },
                buildPayload: function (w) {
                    var messages = [];
                    if (w.system) { messages.push({ role: 'system', content: w.system }); }
                    for (var i = 0; i < w._conversation.length; i++) {
                        messages.push({ role: w._conversation[i].role, content: w._conversation[i].content });
                    }
                    return {
                        model: w.model || 'gpt-4o-mini',
                        max_tokens: w.maxTokens,
                        messages: messages
                    };
                },
                parseResponse: function (json) {
                    if (json && json.choices && json.choices.length && json.choices[0].message) {
                        return json.choices[0].message.content || '';
                    }
                    if (json && json.error) { throw new Error(json.error.message || 'OpenAI API error'); }
                    return '';
                },
                parseStreamChunk: function (json) {
                    if (json && json.choices && json.choices.length && json.choices[0].delta) {
                        return json.choices[0].delta.content || '';
                    }
                    return '';
                }
            }
        };

        // a "custom" adapter aliases anthropic by default; override
        // $.jqx._jqxChat.adapters.custom or pass a sendRequest function.
        $.jqx._jqxChat.adapters.custom = $.jqx._jqxChat.adapters.anthropic;

    })(jqxBaseFramework);
})();




