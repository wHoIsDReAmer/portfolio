<script lang="ts">
  import {writable } from 'svelte/store';
  import ProjectModal from './ProjectModal.svelte';
  import type { Project } from '../../constants/projects';

  const isOpen = writable(false);

  export let project: Project;

  function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  function generateGradient() {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      return `linear-gradient(135deg, #${color1}, #${color2})`;
  }

  function truncateTitle(title: string, maxLength: number = 8) {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
  }
</script>

<ProjectModal bind:isOpen={$isOpen} project={project}/>

<div
  role="button"
  tabindex="0"
  class="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-4 rounded shadow-md hover:shadow-lg hover:cursor-pointer transition-shadow duration-300"
  on:click={() => isOpen.set(true)}
  on:keydown
>
    {#if project.imageUrl}
      <img src={project.imageUrl} alt={project.name} class="w-full h-48 object-cover rounded-t" />
    {:else}
      <div class="w-full h-48 rounded-t flex items-center justify-center text-4xl font-bold text-white" style="background: {generateGradient()}">
        {truncateTitle(project.name)}
      </div>
    {/if}
    <div class="mt-4">
        <div class="flex flex-col">
          <h2 class="text-xl font-bold">{project.name}</h2>
          <div class="flex flex-wrap gap-2 mb-2">
            {#each project.techStack as tech}
              <p class="text-sm bg-gray-700 dark:bg-gray-300 text-gray-100 dark:text-gray-700 rounded-full px-2 py-1">{tech}</p>
            {/each}
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300">{project.shortDescription}</p>
    </div>
</div>
