(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9658: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 6094)),
        Promise.resolve().then(s.bind(s, 7130)),
        Promise.resolve().then(s.t.bind(s, 911, 23)),
        Promise.resolve().then(s.t.bind(s, 7960, 23));
    },
    6094: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return n;
        },
      });
      var r = s(7437),
        a = s(2265);
      function n() {
        let [e, t] = (0, a.useState)(!1),
          [s, n] = (0, a.useState)([
            {
              id: 1,
              text: '您好！欢迎来到悉尼中国育才学校！有什么可以帮助您的吗？',
              sender: 'bot',
              timestamp: new Date(),
            },
          ]),
          [l, i] = (0, a.useState)(''),
          o = () => {
            t(!e);
          },
          c = async () => {
            if ('' === l.trim()) return;
            let e = {
              id: s.length + 1,
              text: l,
              sender: 'user',
              timestamp: new Date(),
            };
            n([...s, e]), i('');
            try {
              let e = await fetch(
                  'https://withered-dew-9832.starvian.workers.dev',
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: l }),
                  }
                ),
                t =
                  (await e.json()).reply ||
                  '抱歉，服务暂时不可用，请稍后再试。',
                r = {
                  id: s.length + 2,
                  text: t,
                  sender: 'bot',
                  timestamp: new Date(),
                };
              n((e) => [...e, r]);
            } catch (t) {
              console.error('发送消息失败:', t);
              let e = {
                id: s.length + 2,
                text: '抱歉，网络连接出现问题，请检查网络后重试。如需紧急帮助，请拨打 0416682288。',
                sender: 'bot',
                timestamp: new Date(),
              };
              n((t) => [...t, e]);
            }
          };
        return (0, r.jsxs)('div', {
          className: 'fixed bottom-6 right-6 z-50',
          children: [
            e &&
              (0, r.jsxs)('div', {
                className:
                  'mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 duration-300',
                children: [
                  (0, r.jsxs)('div', {
                    className:
                      'bg-header-dark text-white p-4 flex items-center justify-between',
                    children: [
                      (0, r.jsxs)('div', {
                        className: 'flex items-center space-x-3',
                        children: [
                          (0, r.jsx)('div', {
                            className:
                              'w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center',
                            children: (0, r.jsx)('svg', {
                              className: 'w-5 h-5 text-header-dark',
                              fill: 'currentColor',
                              viewBox: '0 0 24 24',
                              children: (0, r.jsx)('path', {
                                d: 'M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
                              }),
                            }),
                          }),
                          (0, r.jsxs)('div', {
                            children: [
                              (0, r.jsx)('h3', {
                                className: 'font-semibold text-sm',
                                children: '在线客服',
                              }),
                              (0, r.jsx)('p', {
                                className: 'text-xs opacity-90',
                                children: '悉尼中国育才学校',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)('button', {
                        onClick: o,
                        className:
                          'text-white hover:text-gray-200 transition-colors',
                        children: (0, r.jsx)('svg', {
                          className: 'w-5 h-5',
                          fill: 'none',
                          stroke: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, r.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M6 18L18 6M6 6l12 12',
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className:
                      'flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50',
                    children: s.map((e) =>
                      (0, r.jsx)(
                        'div',
                        {
                          className: 'flex '.concat(
                            'user' === e.sender
                              ? 'justify-end'
                              : 'justify-start'
                          ),
                          children: (0, r.jsxs)('div', {
                            className:
                              'max-w-xs px-3 py-2 rounded-lg text-sm '.concat(
                                'user' === e.sender
                                  ? 'bg-header-dark text-white'
                                  : 'bg-white text-gray-800 border border-gray-200'
                              ),
                            children: [
                              (0, r.jsx)('p', { children: e.text }),
                              (0, r.jsx)('p', {
                                className: 'text-xs mt-1 '.concat(
                                  'user' === e.sender
                                    ? 'text-gray-300'
                                    : 'text-gray-500'
                                ),
                                children: e.timestamp.toLocaleTimeString(
                                  'zh-CN',
                                  { hour: '2-digit', minute: '2-digit' }
                                ),
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, r.jsx)('div', {
                    className: 'p-4 border-t border-gray-200 bg-white',
                    children: (0, r.jsxs)('div', {
                      className: 'flex space-x-2',
                      children: [
                        (0, r.jsx)('input', {
                          type: 'text',
                          value: l,
                          onChange: (e) => i(e.target.value),
                          onKeyPress: (e) => {
                            'Enter' !== e.key ||
                              e.shiftKey ||
                              (e.preventDefault(), c());
                          },
                          placeholder: '输入您的问题...',
                          className:
                            'flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-header-dark focus:border-transparent text-sm',
                        }),
                        (0, r.jsx)('button', {
                          onClick: c,
                          disabled: '' === l.trim(),
                          className:
                            'px-4 py-2 bg-header-dark text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-header-dark focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
                          children: (0, r.jsx)('svg', {
                            className: 'w-4 h-4',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24',
                            children: (0, r.jsx)('path', {
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              strokeWidth: 2,
                              d: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            (0, r.jsx)('button', {
              onClick: o,
              className:
                'w-14 h-14 bg-header-dark text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group',
              'aria-label': '打开聊天窗口',
              children: e
                ? (0, r.jsx)('svg', {
                    className: 'w-6 h-6',
                    fill: 'none',
                    stroke: 'currentColor',
                    viewBox: '0 0 24 24',
                    children: (0, r.jsx)('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeWidth: 2,
                      d: 'M6 18L18 6M6 6l12 12',
                    }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)('svg', {
                        className:
                          'w-6 h-6 group-hover:scale-110 transition-transform',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                        children: (0, r.jsx)('path', {
                          d: 'M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
                        }),
                      }),
                      (0, r.jsx)('div', {
                        className:
                          'absolute -top-1 -right-1 w-3 h-3 bg-custom-orange rounded-full animate-pulse',
                      }),
                    ],
                  }),
            }),
          ],
        });
      }
    },
    7130: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return i;
        },
      });
      var r = s(7437),
        a = s(7648),
        n = s(5475),
        l = s(2265);
      function i() {
        let e = (0, n.usePathname)(),
          [t, s] = (0, l.useState)(!1),
          i = (t) => e === t,
          o = [
            { href: '/', label: 'HOME' },
            { href: '/about', label: 'ABOUT US' },
            { href: '/programs', label: 'OUR PROGRAMS' },
            { href: '/news', label: 'NEWS & EVENTS' },
            { href: '/contact', label: 'CONTACT US' },
          ];
        return (0, r.jsxs)('header', {
          className: 'sticky top-0 z-50',
          children: [
            (0, r.jsx)('div', {
              className: 'bg-gray-100 text-gray-700 text-sm py-2',
              children: (0, r.jsxs)('div', {
                className:
                  'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center',
                children: [
                  (0, r.jsx)('div', {
                    children: (0, r.jsx)('span', {
                      children: 'CALL 0416682288',
                    }),
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center space-x-3',
                    children: [
                      (0, r.jsx)('a', {
                        href: 'https://facebook.com',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'hover:opacity-70 transition-opacity',
                        title: 'Facebook',
                        children: (0, r.jsx)('svg', {
                          className: 'w-5 h-5 fill-current',
                          viewBox: '0 0 24 24',
                          children: (0, r.jsx)('path', {
                            d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                          }),
                        }),
                      }),
                      (0, r.jsx)('a', {
                        href: 'https://twitter.com',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'hover:opacity-70 transition-opacity',
                        title: 'Twitter',
                        children: (0, r.jsx)('svg', {
                          className: 'w-5 h-5 fill-current',
                          viewBox: '0 0 24 24',
                          children: (0, r.jsx)('path', {
                            d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                          }),
                        }),
                      }),
                      (0, r.jsx)('a', {
                        href: 'https://linkedin.com',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'hover:opacity-70 transition-opacity',
                        title: 'LinkedIn',
                        children: (0, r.jsx)('svg', {
                          className: 'w-5 h-5 fill-current',
                          viewBox: '0 0 24 24',
                          children: (0, r.jsx)('path', {
                            d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                          }),
                        }),
                      }),
                      (0, r.jsx)('a', {
                        href: 'https://weixin.qq.com',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'hover:opacity-70 transition-opacity',
                        title: 'WeChat',
                        children: (0, r.jsx)('svg', {
                          className: 'w-5 h-5 fill-current',
                          viewBox: '0 0 24 24',
                          children: (0, r.jsx)('path', {
                            d: 'M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.55-.302-2.676-2.476-4.81-5.722-6.04C10.85 2.462 9.78 2.188 8.691 2.188zm-2.363 2.58c.55 0 .995.445.995.995s-.445.995-.995.995-.995-.445-.995-.995.445-.995.995-.995zm4.726 0c.55 0 .995.445.995.995s-.445.995-.995.995-.995-.445-.995-.995.445-.995.995-.995zm5.538 6.561c-2.213 0-4.129.876-5.186 2.321-.302.414-.48.865-.48 1.328 0 2.363 2.134 4.282 4.766 4.282.39 0 .770-.054 1.141-.14a.64.64 0 0 1 .53.07l1.347.785a.24.24 0 0 0 .118.04c.115 0 .209-.094.209-.209 0-.051-.023-.102-.034-.15l-.275-1.048a.413.413 0 0 1 .15-.47c1.296-.906 2.134-2.266 2.134-3.76 0-2.75-2.32-4.99-5.186-4.99v-.009zm-2.635 1.817c.414 0 .749.336.749.749s-.335.749-.749.749-.749-.336-.749-.749.335-.749.749-.749zm5.271 0c.414 0 .749.336.749.749s-.335.749-.749.749-.749-.336-.749-.749.335-.749.749-.749z',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsxs)('nav', {
              className: 'shadow-md',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-stretch justify-between min-h-[70px]',
                  children: [
                    ' ',
                    (0, r.jsx)('div', {
                      className:
                        'bg-header-dark text-white flex items-center pl-4 pr-10 md:pl-6 lg:pl-8 py-2',
                      style: {
                        clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
                      },
                      children: (0, r.jsx)(a.default, {
                        href: '/',
                        className: 'flex items-center space-x-3',
                        children: (0, r.jsxs)('div', {
                          className: 'flex flex-col',
                          children: [
                            (0, r.jsx)('span', {
                              className:
                                'font-bold text-lg md:text-xl leading-tight',
                              children: '悉尼中国育才学校',
                            }),
                            (0, r.jsx)('span', {
                              className:
                                'text-xs md:text-sm font-normal leading-tight',
                              children: 'Yucai Sydney Chinese School',
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsxs)('div', {
                      className:
                        'flex-grow bg-custom-yellow flex justify-end items-stretch',
                      children: [
                        (0, r.jsx)('div', {
                          className:
                            'hidden md:flex items-center space-x-1 lg:space-x-2 pr-4 md:pr-6 lg:pr-8',
                          children: o.map((e) =>
                            (0, r.jsx)(
                              a.default,
                              {
                                href: e.href,
                                className:
                                  'text-header-dark hover:bg-custom-orange/30 px-3 lg:px-4 py-5 rounded-md text-sm font-medium uppercase tracking-wider transition-colors duration-200 '.concat(
                                    i(e.href) ? 'bg-custom-orange/40' : ''
                                  ),
                                children: e.label,
                              },
                              e.href
                            )
                          ),
                        }),
                        (0, r.jsx)('div', {
                          className: 'md:hidden flex items-center pr-4',
                          children: (0, r.jsx)('button', {
                            onClick: () => s(!t),
                            className:
                              'text-header-dark p-2 rounded-md hover:bg-custom-orange/30 focus:outline-none focus:bg-custom-orange/40',
                            'aria-label': 'Open main menu',
                            'aria-expanded': t,
                            children: (0, r.jsx)('svg', {
                              className: 'h-6 w-6',
                              stroke: 'currentColor',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              children: (0, r.jsx)('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: '2',
                                d: 'M4 6h16M4 12h16M4 18h16',
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t &&
                  (0, r.jsx)('div', {
                    className:
                      'md:hidden bg-custom-yellow border-t border-custom-orange/50',
                    children: (0, r.jsx)('div', {
                      className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3',
                      children: o.map((e) =>
                        (0, r.jsx)(
                          a.default,
                          {
                            href: e.href,
                            onClick: () => s(!1),
                            className:
                              'block px-3 py-2 rounded-md text-base font-medium text-header-dark hover:bg-custom-orange/30 '.concat(
                                i(e.href) ? 'bg-custom-orange/40' : ''
                              ),
                            children: e.label,
                          },
                          e.href
                        )
                      ),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    7648: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = s(2972),
        a = s.n(r);
    },
    5523: function (e, t, s) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = s(7043)._(s(2265)).default.createContext(null);
    },
    7960: function () {},
    911: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_e8ce0c', '__Inter_Fallback_e8ce0c'",
          fontStyle: 'normal',
        },
        className: '__className_e8ce0c',
      };
    },
  },
  function (e) {
    e.O(0, [944, 972, 971, 117, 744], function () {
      return e((e.s = 9658));
    }),
      (_N_E = e.O());
  },
]);
