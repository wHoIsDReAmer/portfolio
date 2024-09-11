<script lang="ts">
  import type { Project } from "../../constants/projects";
  import { onMount } from "svelte";
  export let isOpen = false;
  export let project: Project;

  function closeModal() {
    isOpen = false;
  }

  function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(135deg, #${color1}, #${color2})`;
  }

  let gradient: string;

  onMount(() => {
    gradient = generateGradient();
  });
</script>

{#if isOpen}
<div
  role="button"
  tabindex="0"
  class="cursor-default fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
  on:click={closeModal}
  on:keydown={closeModal}
  >

  <div
    role="button"
    tabindex="0"
    class="cursor-default relative p-3 w-3/4 min-w-[75%] max-w-[75%] max-h-[90vh] rounded-lg bg-white dark:bg-gray-800 text-base leading-relaxed text-blue-gray-500 antialiased shadow-2xl overflow-y-auto"
    on:click|stopPropagation
    on:keydown|stopPropagation
  >
    {#if project.imageUrl}
      <img src={project.imageUrl} alt={project.name} class="w-full h-80 object-cover rounded-t" />
    {:else}
      <div class="w-full h-80 rounded-t flex items-center justify-center text-4xl font-bold text-white" style="background: {gradient}">
        {project.name}
      </div>
    {/if}
    <div class="p-4">
      <div class="flex flex-row gap-2">
        <h1 class="text-xl font-bold mb-2">{project.name}</h1>
        {#if project.githubUrl}
          <a href={project.githubUrl} target="_blank">
            <img src={"https://img.shields.io/badge/github-181717.svg?&style=for-the-badge&logo=github&logoColor=white"} alt="github" class="h-6" />
          </a>
        {/if}
      </div>
      <p class="text-sm">{project.date}</p>
      <p class="text-m">{project.shortDescription}</p>
        
      <p class="text-lg font-bold mt-4">📝 프로젝트 설명</p>
      <p class="text-m">{@html project.description}</p>

      <p class="text-lg font-bold mt-4">⚙️ 사용한 기술 스택</p>
      <div class="flex flex-row gap-2">
        {#each project.techStack as tech}
          <img src={"https://img.shields.io/badge/" + tech + "-" + getRandomColor()} alt={tech} class="h-6" />
        {/each}
      </div>

      <p class=""></p>

      <p class="text-lg font-bold mt-4">🧠 배운 점</p>
      <ul class="list-disc list-inside">
        {#each project.learnedThing as thing}
          <li>{thing}</li>
        {/each}
      </ul>

      <p class="text-lg font-bold mt-4">🧠 어려웠던 점</p>
      <ul class="list-disc list-inside">
        {#each project.hardThing as thing}
          <li>{thing}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
{/if}
