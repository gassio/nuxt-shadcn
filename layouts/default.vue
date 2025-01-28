<script setup lang="ts">
import { Button } from '@/components/ui/button'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
         NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()

</script>

<template>
  <div class="flex flex-col min-h-screen">

    <header class="flex items-center h-16 md:h-18 z-50 sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div class="relative container flex items-center justify-between w-full">
            <div class="flex items-center gap-6 md:gap-8 lg:gap-10">
                <NuxtLink to="/" class="hidden text-lg items-center space-x-2 md:flex"> 
                    <span class="hidden font-bold sm:inline-block">Phylaktron</span> 
                </NuxtLink>

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

            <div class="absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4 md:hidden">
                <a href="/" aria-label="Astronomy homepage">
                    <svg width="1em" height="1em" viewBox="0 0 24 24" class="size-8" data-icon="stars-outline">
                    <use xlink:href="#ai:local:stars-outline"></use>
                    </svg>
                </a>
            </div>

            <!-- <div class="flex items-center gap-x-4">

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                    <Button variant="outline">
                        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span class="sr-only">Toggle theme</span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem @click="colorMode.preference = 'light'">
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.preference = 'dark'">
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.preference = 'system'">
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div> -->

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
