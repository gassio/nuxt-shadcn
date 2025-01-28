<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface Project {
  name: string
  release: string
  image: string
  link: string
}

const projects = ref<Project[]>([
  {
    name: "Project Alpha",
    release: "2022-01-15",
    image: "https://example.com/images/project-alpha.jpg",
    link: "https://example.com/projects/alpha"
  },
  {
    name: "Project Beta",
    release: "2022-03-22",
    image: "https://example.com/images/project-beta.jpg",
    link: "https://example.com/projects/beta"
  },
  {
    name: "Project Gamma",
    release: "2022-06-10",
    image: "https://example.com/images/project-gamma.jpg",
    link: "https://example.com/projects/gamma"
  },
  {
    name: "Project Delta",
    release: "2022-09-05",
    image: "https://example.com/images/project-delta.jpg",
    link: "https://example.com/projects/delta"
  },
  {
    name: "Project Epsilon",
    release: "2022-12-01",
    image: "https://example.com/images/project-epsilon.jpg",
    link: "https://example.com/projects/epsilon"
  }
])
</script>
    

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
      />
    </div>
  </section>
</template>
