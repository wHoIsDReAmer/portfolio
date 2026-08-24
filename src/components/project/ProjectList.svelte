<script lang="ts">
  import type { Project } from '../../constants/projects';
  import { getGradientColor } from '../../utils/color';
  import ProjectModal from './ProjectModal.svelte';

  let { projects }: { projects: Project[] } = $props();

  let selected = $state<Project | null>(null);

  const open = (project: Project) => (selected = project);
  const close = () => (selected = null);
</script>

<ul class="list">
  {#each projects as project (project.name)}
    <li>
      <button class="row" type="button" onclick={() => open(project)}>
        <span class="thumb">
          {#if project.imageUrl}
            <img src={project.imageUrl} alt="" loading="lazy" decoding="async" />
          {:else}
            <span class="thumb__fill" style="background: {getGradientColor(project.name)}"></span>
          {/if}
        </span>

        <span class="body">
          <span class="head">
            <span class="name">{project.name}</span>
            {#if project.private}
              <span class="badge">Private</span>
            {/if}
            <span class="date">{project.date}</span>
          </span>
          <span class="desc">{project.shortDescription}</span>
        </span>
      </button>
    </li>
  {/each}
</ul>

<ProjectModal project={selected} onclose={close} />

<style>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
    width: 100%;
    padding: 0.75rem 0.6rem;
    margin-left: -0.6rem;
    border: 0;
    border-radius: 6px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.18s ease;
  }

  .row:hover,
  .row:focus-visible {
    background-color: var(--line);
    outline: none;
  }

  .thumb {
    flex: none;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .thumb img,
  .thumb__fill {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
  }

  .head {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .name {
    font-size: 0.95rem;
    font-weight: 600;
    word-break: keep-all;
    transition: color 0.18s ease;
  }

  .row:hover .name,
  .row:focus-visible .name {
    color: var(--accent);
  }

  .badge {
    flex: none;
    padding: 0.05rem 0.4rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .date {
    font-size: 0.75rem;
    color: var(--muted);
    white-space: nowrap;
  }

  .desc {
    font-size: 0.82rem;
    color: var(--muted);
    word-break: keep-all;
  }
</style>
