import { _ as __nuxt_component_0 } from './nuxt-link-BX6gTCDB.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, computed, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from 'radix-vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$5)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><header class="flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background border-b"><div class="relative container flex items-center justify-between w-full"><div class="flex items-center gap-6 md:gap-8 lg:gap-10"><a href="/" class="hidden items-center space-x-2 md:flex"><svg width="1em" height="1em" viewBox="0 0 24 24" class="size-8" data-icon="stars-outline"><symbol id="ai:local:stars-outline"><path fill="currentColor" fill-rule="evenodd" d="M12.422 3.072c-.374.355-.828.929-1.501 1.785l-.34.433a56.28 56.28 0 0 0-.067.085c-.305.39-.587.749-.983.96-.403.215-.854.24-1.328.266l-.104.006-.527.03c-1.046.06-1.74.103-2.223.207-.466.1-.536.218-.566.278-.036.072-.084.223.111.697.199.484.567 1.11 1.118 2.042l.279.47.052.089c.255.428.484.814.544 1.264.06.446-.056.883-.187 1.375l-.027.101-.143.54c-.282 1.069-.472 1.791-.535 2.321-.064.53.028.65.065.689l.002.002c.024.026.105.115.572.061.448-.051 1.051-.21 1.928-.451a8.035 8.035 0 0 1-.724-.664c-.34-.365-.662-.849-.573-1.474.09-.63.539-1 .97-1.25.414-.237.99-.462 1.651-.721l.421-.165c.213-.084.33-.13.416-.172a.441.441 0 0 0 .074-.042.438.438 0 0 0 .04-.073c.04-.086.085-.205.165-.418l.157-.424c.248-.665.463-1.243.695-1.66.241-.435.604-.89 1.232-.99.623-.1 1.112.212 1.485.544.358.321.758.799 1.22 1.351l.291.35c.148.176.232.276.3.345a.632.632 0 0 0 .069.062l.003.002.002.001.01.003a.604.604 0 0 0 .08.015 6.5 6.5 0 0 0 .453.033l.453.024.615.035c.47-.413.783-.717.978-.972.21-.274.212-.397.202-.469-.01-.071-.041-.208-.45-.458-.425-.26-1.068-.53-2.037-.932l-.489-.204a44.117 44.117 0 0 0-.095-.04c-.441-.182-.858-.354-1.168-.689-.305-.329-.455-.76-.619-1.23a24.608 24.608 0 0 0-.036-.102l-.183-.522c-.362-1.032-.607-1.726-.847-2.187-.236-.452-.363-.472-.387-.476h-.003c-.022-.005-.145-.028-.51.319Zm7.47 8.302a5.05 5.05 0 0 0 .344-.4c.344-.449.58-.966.498-1.58-.098-.733-.592-1.195-1.155-1.539-.536-.327-1.29-.64-2.184-1.013l-.547-.228c-.598-.249-.68-.3-.74-.363-.064-.07-.116-.173-.34-.81l-.202-.58c-.337-.959-.617-1.757-.913-2.325-.302-.578-.73-1.136-1.466-1.262-.74-.126-1.326.262-1.797.71-.464.44-.985 1.102-1.61 1.897l-.378.481c-.416.529-.497.607-.577.65-.074.04-.166.06-.812.097l-.527.03-.064.004c-.965.056-1.778.103-2.39.235-.643.139-1.263.413-1.592 1.077-.324.652-.187 1.318.067 1.935.245.596.671 1.317 1.184 2.183l.309.522c.337.57.386.68.4.788.015.113-.005.24-.177.894l-.158.598c-.264.996-.482 1.82-.56 2.467-.079.66-.042 1.35.455 1.887.511.553 1.2.61 1.846.535.62-.072 1.41-.29 2.347-.55l.128-.035.598-.29.043.039a.627.627 0 0 1 .063.067l.001.002.001.003a6.495 6.495 0 0 1 .06.539l.033.451c.052.713.097 1.33.201 1.798.11.49.328 1.023.89 1.306.564.283 1.122.136 1.578-.072.434-.198.95-.535 1.545-.922l.378-.246a6.34 6.34 0 0 1 .381-.238.578.578 0 0 1 .07-.033l.008-.003h.013c.012 0 .036.002.079.01.095.016.22.048.443.106l.44.115c.695.18 1.297.337 1.773.389.495.054 1.078.022 1.523-.43.446-.453.468-1.037.405-1.53-.06-.476-.229-1.073-.422-1.763l-.123-.437a6.52 6.52 0 0 1-.115-.44.598.598 0 0 1-.012-.078v-.01l.003-.009a.564.564 0 0 1 .032-.07c.043-.083.11-.19.231-.383l.24-.382c.378-.6.706-1.121.896-1.559.2-.458.338-1.02.043-1.579a1.508 1.508 0 0 0-.688-.656Zm-6.59-1.625.011.002c-.007 0-.01-.001-.011-.002Zm.024.007a.962.962 0 0 1 .245.176c.267.238.596.629 1.105 1.238l.256.306.054.065c.223.268.46.555.794.722.335.168.706.187 1.053.205l.085.005.395.02c.79.044 1.296.073 1.645.144a.998.998 0 0 1 .292.094v.004a.95.95 0 0 1-.087.274c-.14.321-.405.746-.823 1.41l-.209.333-.045.071c-.183.29-.383.606-.436.977-.053.37.05.73.144 1.063l.024.082.107.382c.214.762.35 1.251.394 1.602.02.16.015.244.008.283a1.017 1.017 0 0 1-.286-.003c-.353-.039-.846-.165-1.613-.364l-.385-.1-.082-.022c-.336-.088-.697-.184-1.066-.125-.37.06-.683.264-.97.453l-.071.046-.33.214c-.657.429-1.079.7-1.398.847a.958.958 0 0 1-.275.092h-.006a.99.99 0 0 1-.1-.289c-.077-.346-.115-.85-.173-1.637l-.028-.394-.006-.085c-.024-.345-.05-.716-.225-1.047-.174-.33-.466-.563-.738-.78l-.067-.053-.31-.25c-.62-.496-1.018-.817-1.262-1.08a.982.982 0 0 1-.18-.237.966.966 0 0 1 .228-.163c.304-.175.771-.36 1.504-.647l.366-.144.08-.03c.32-.125.67-.26.932-.527.263-.268.393-.62.512-.94l.03-.08.137-.369c.274-.736.45-1.205.62-1.511a.946.946 0 0 1 .161-.231ZM8.75 14.372s.002.005.002.012c-.003-.008-.003-.012-.002-.012Zm-.002.037-.006.012c-.001 0 0-.004.006-.012Zm9.571 4.832s.001-.005.005-.011c-.002.008-.004.011-.005.01Zm.027-.034a.027.027 0 0 1 .011-.005s-.003.003-.011.005Zm-5.009-9.46c.008-.006.012-.007.012-.006l-.012.006Z" clip-rule="evenodd"></path></symbol><use xlink:href="#ai:local:stars-outline"></use></svg><span class="hidden font-bold sm:inline-block"> Phylaktron </span></a><div class="hidden md:flex">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Home`);
                                  } else {
                                    return [
                                      createTextVNode("Home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), {
                            class: unref(navigationMenuTriggerStyle)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/" }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`About`);
                                  } else {
                                    return [
                                      createTextVNode("About")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: "/about" }, {
                                  default: withCtx(() => [
                                    createTextVNode("About")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), {
                            class: unref(navigationMenuTriggerStyle)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/about" }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Projects`);
                                  } else {
                                    return [
                                      createTextVNode("Projects")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: "/projects" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Projects")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), {
                            class: unref(navigationMenuTriggerStyle)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/projects" }, {
                                default: withCtx(() => [
                                  createTextVNode("Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Contact`);
                                  } else {
                                    return [
                                      createTextVNode("Contact")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, { to: "/contact" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), {
                            class: unref(navigationMenuTriggerStyle)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, { to: "/contact" }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/about" }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/projects" }, {
                              default: withCtx(() => [
                                createTextVNode("Projects")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          class: unref(navigationMenuTriggerStyle)()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, { to: "/contact" }, {
                              default: withCtx(() => [
                                createTextVNode("Contact")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["class"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        class: unref(navigationMenuTriggerStyle)()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        class: unref(navigationMenuTriggerStyle)()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/about" }, {
                            default: withCtx(() => [
                              createTextVNode("About")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        class: unref(navigationMenuTriggerStyle)()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/projects" }, {
                            default: withCtx(() => [
                              createTextVNode("Projects")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        class: unref(navigationMenuTriggerStyle)()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/contact" }, {
                            default: withCtx(() => [
                              createTextVNode("Contact")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t"><div class="container grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5"><div><span class="text-sm font-medium text-foreground"> Test Title 1</span><ul class="mt-4 list-inside space-y-3"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm text-muted-foreground hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-sm text-muted-foreground hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "text-sm text-muted-foreground hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-sm text-muted-foreground hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><span class="text-sm font-medium text-foreground"> Test Title 2 </span><ul class="mt-4 list-inside space-y-3"><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Security </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Customization </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Customers </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Changelog </a></li></ul></div><div><span class="text-sm font-medium text-foreground"> Test Title 3 </span><ul class="mt-4 list-inside space-y-3"><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Introduction </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Installation </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Components </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-primary"> Code Blocks </a></li></ul></div><div class="flex flex-col items-end md:col-span-2"> Test text Test text Test text </div></div><div class="border-t py-4"><div class="container flex items-center justify-between"><p class="text-left text-sm text-muted-foreground"> Built by <a href="https://www.phylaktron.com" class="font-medium underline underline-offset-4">Phylaktron.</a></p><div class="flex items-center gap-3"></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DUVq2Qrj.mjs.map
