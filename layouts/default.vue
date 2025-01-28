<script setup lang="ts">
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'


const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

</script>

<template>
  <div class="flex flex-col min-h-screen">

    <header class="flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background border-b">
        <div class="relative container flex items-center justify-between w-full">
            <div class="flex items-center gap-6 md:gap-8 lg:gap-10">
                <a href="/" class="hidden items-center space-x-2 md:flex"> 
                    <svg width="1em" height="1em" viewBox="0 0 24 24" class="size-8" data-icon="stars-outline">  <symbol id="ai:local:stars-outline"><path fill="currentColor" fill-rule="evenodd" d="M12.422 3.072c-.374.355-.828.929-1.501 1.785l-.34.433a56.28 56.28 0 0 0-.067.085c-.305.39-.587.749-.983.96-.403.215-.854.24-1.328.266l-.104.006-.527.03c-1.046.06-1.74.103-2.223.207-.466.1-.536.218-.566.278-.036.072-.084.223.111.697.199.484.567 1.11 1.118 2.042l.279.47.052.089c.255.428.484.814.544 1.264.06.446-.056.883-.187 1.375l-.027.101-.143.54c-.282 1.069-.472 1.791-.535 2.321-.064.53.028.65.065.689l.002.002c.024.026.105.115.572.061.448-.051 1.051-.21 1.928-.451a8.035 8.035 0 0 1-.724-.664c-.34-.365-.662-.849-.573-1.474.09-.63.539-1 .97-1.25.414-.237.99-.462 1.651-.721l.421-.165c.213-.084.33-.13.416-.172a.441.441 0 0 0 .074-.042.438.438 0 0 0 .04-.073c.04-.086.085-.205.165-.418l.157-.424c.248-.665.463-1.243.695-1.66.241-.435.604-.89 1.232-.99.623-.1 1.112.212 1.485.544.358.321.758.799 1.22 1.351l.291.35c.148.176.232.276.3.345a.632.632 0 0 0 .069.062l.003.002.002.001.01.003a.604.604 0 0 0 .08.015 6.5 6.5 0 0 0 .453.033l.453.024.615.035c.47-.413.783-.717.978-.972.21-.274.212-.397.202-.469-.01-.071-.041-.208-.45-.458-.425-.26-1.068-.53-2.037-.932l-.489-.204a44.117 44.117 0 0 0-.095-.04c-.441-.182-.858-.354-1.168-.689-.305-.329-.455-.76-.619-1.23a24.608 24.608 0 0 0-.036-.102l-.183-.522c-.362-1.032-.607-1.726-.847-2.187-.236-.452-.363-.472-.387-.476h-.003c-.022-.005-.145-.028-.51.319Zm7.47 8.302a5.05 5.05 0 0 0 .344-.4c.344-.449.58-.966.498-1.58-.098-.733-.592-1.195-1.155-1.539-.536-.327-1.29-.64-2.184-1.013l-.547-.228c-.598-.249-.68-.3-.74-.363-.064-.07-.116-.173-.34-.81l-.202-.58c-.337-.959-.617-1.757-.913-2.325-.302-.578-.73-1.136-1.466-1.262-.74-.126-1.326.262-1.797.71-.464.44-.985 1.102-1.61 1.897l-.378.481c-.416.529-.497.607-.577.65-.074.04-.166.06-.812.097l-.527.03-.064.004c-.965.056-1.778.103-2.39.235-.643.139-1.263.413-1.592 1.077-.324.652-.187 1.318.067 1.935.245.596.671 1.317 1.184 2.183l.309.522c.337.57.386.68.4.788.015.113-.005.24-.177.894l-.158.598c-.264.996-.482 1.82-.56 2.467-.079.66-.042 1.35.455 1.887.511.553 1.2.61 1.846.535.62-.072 1.41-.29 2.347-.55l.128-.035.598-.29.043.039a.627.627 0 0 1 .063.067l.001.002.001.003a6.495 6.495 0 0 1 .06.539l.033.451c.052.713.097 1.33.201 1.798.11.49.328 1.023.89 1.306.564.283 1.122.136 1.578-.072.434-.198.95-.535 1.545-.922l.378-.246a6.34 6.34 0 0 1 .381-.238.578.578 0 0 1 .07-.033l.008-.003h.013c.012 0 .036.002.079.01.095.016.22.048.443.106l.44.115c.695.18 1.297.337 1.773.389.495.054 1.078.022 1.523-.43.446-.453.468-1.037.405-1.53-.06-.476-.229-1.073-.422-1.763l-.123-.437a6.52 6.52 0 0 1-.115-.44.598.598 0 0 1-.012-.078v-.01l.003-.009a.564.564 0 0 1 .032-.07c.043-.083.11-.19.231-.383l.24-.382c.378-.6.706-1.121.896-1.559.2-.458.338-1.02.043-1.579a1.508 1.508 0 0 0-.688-.656Zm-6.59-1.625.011.002c-.007 0-.01-.001-.011-.002Zm.024.007a.962.962 0 0 1 .245.176c.267.238.596.629 1.105 1.238l.256.306.054.065c.223.268.46.555.794.722.335.168.706.187 1.053.205l.085.005.395.02c.79.044 1.296.073 1.645.144a.998.998 0 0 1 .292.094v.004a.95.95 0 0 1-.087.274c-.14.321-.405.746-.823 1.41l-.209.333-.045.071c-.183.29-.383.606-.436.977-.053.37.05.73.144 1.063l.024.082.107.382c.214.762.35 1.251.394 1.602.02.16.015.244.008.283a1.017 1.017 0 0 1-.286-.003c-.353-.039-.846-.165-1.613-.364l-.385-.1-.082-.022c-.336-.088-.697-.184-1.066-.125-.37.06-.683.264-.97.453l-.071.046-.33.214c-.657.429-1.079.7-1.398.847a.958.958 0 0 1-.275.092h-.006a.99.99 0 0 1-.1-.289c-.077-.346-.115-.85-.173-1.637l-.028-.394-.006-.085c-.024-.345-.05-.716-.225-1.047-.174-.33-.466-.563-.738-.78l-.067-.053-.31-.25c-.62-.496-1.018-.817-1.262-1.08a.982.982 0 0 1-.18-.237.966.966 0 0 1 .228-.163c.304-.175.771-.36 1.504-.647l.366-.144.08-.03c.32-.125.67-.26.932-.527.263-.268.393-.62.512-.94l.03-.08.137-.369c.274-.736.45-1.205.62-1.511a.946.946 0 0 1 .161-.231ZM8.75 14.372s.002.005.002.012c-.003-.008-.003-.012-.002-.012Zm-.002.037-.006.012c-.001 0 0-.004.006-.012Zm9.571 4.832s.001-.005.005-.011c-.002.008-.004.011-.005.01Zm.027-.034a.027.027 0 0 1 .011-.005s-.003.003-.011.005Zm-5.009-9.46c.008-.006.012-.007.012-.006l-.012.006Z" clip-rule="evenodd"></path></symbol><use xlink:href="#ai:local:stars-outline"></use>  
                    </svg> 
                    <span class="hidden font-bold sm:inline-block"> Phylaktron </span> 
                </a>

                <div class="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                    <NuxtLink to="/">Home</NuxtLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                    <NuxtLink to="/about">About</NuxtLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                    <NuxtLink to="/projects">Projects</NuxtLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                                    <NuxtLink to="/contact">Contact</NuxtLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

            </div>
        </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t">
        <div class="container grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5">
            <div>
                <span class="text-sm font-medium text-foreground"> Test Title 1</span>
                <ul class="mt-4 list-inside space-y-3">
                    <li>
                        <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-primary">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-primary">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects" class="text-sm text-muted-foreground hover:text-primary">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="text-sm text-muted-foreground hover:text-primary">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <span class="text-sm font-medium text-foreground"> Test Title 2 </span>
                <ul class="mt-4 list-inside space-y-3">
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Security </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Customization </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Customers </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Changelog </a>
                    </li>
                </ul>
            </div>
            <div>
                <span class="text-sm font-medium text-foreground"> Test Title 3 </span>
                <ul class="mt-4 list-inside space-y-3">
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Introduction </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Installation </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Components </a>
                    </li>
                    <li>
                    <a href="#" class="text-sm text-muted-foreground hover:text-primary"> Code Blocks </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col items-end md:col-span-2"> 
                Test text Test text Test text
            </div>
        </div>
        <div class="border-t py-4">
            <div class="container flex items-center justify-between">
                <p class="text-left text-sm text-muted-foreground"> Built by <a href="https://www.phylaktron.com" class="font-medium underline underline-offset-4" >Phylaktron.</a></p>
                <div class="flex items-center gap-3">

                </div>
            </div>
        </div>
    </footer>

  </div>
</template>
