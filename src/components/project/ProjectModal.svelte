<script lang="ts">
  import type { Project } from '../../constants/projects';
  import { getGradientColor } from '../../utils/color';

  interface Props {
    project: Project | null;
    onclose: () => void;
  }

  let { project, onclose }: Props = $props();

  const close = () => onclose();

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') close();
  };

  // 모달이 열려 있는 동안 배경 스크롤을 잠근다.
  $effect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:window onkeydown={onKeydown} />

{#if project}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="backdrop" onclick={close}>
    <article
      class="panel"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      tabindex="-1"
      onclick={(event) => event.stopPropagation()}
    >
      <button class="close" type="button" aria-label="닫기" onclick={close}>&times;</button>

      <header class="hero">
        {#if project.imageUrl}
          <img src={project.imageUrl} alt="" />
        {:else}
          <div class="hero__fill" style="background: {getGradientColor(project.name)}"></div>
        {/if}
      </header>

      <div class="content">
        <div class="titleRow">
          <h2>{project.name}</h2>
          {#if project.private}
            <span class="badge">Private</span>
          {/if}
          {#if project.githubUrl}
            <a class="gh" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          {/if}
        </div>
        <p class="date">{project.date}</p>

        <div class="stack">
          {#each project.techStack as tech}
            <span class="tag">{tech}</span>
          {/each}
        </div>

        <h3>프로젝트 설명</h3>
        <p class="prose">{@html project.description}</p>

        {#if project.learnedThing?.length}
          <h3>배운 점</h3>
          <ul class="prose">
            {#each project.learnedThing as thing}
              <li>{thing}</li>
            {/each}
          </ul>
        {/if}

        {#if project.hardThing?.length}
          <h3>어려웠던 점</h3>
          <ul class="prose">
            {#each project.hardThing as thing}
              <li>{thing}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </article>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: 1.25rem;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(3px);
    animation: fade 0.18s ease;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  .panel {
    position: relative;
    width: min(38rem, 100%);
    max-height: 88vh;
    overflow-y: auto;
    border-radius: 10px;
    background: var(--card);
    color: var(--fg);
    box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.5);
    cursor: default;
  }

  .close {
    position: absolute;
    top: 0.6rem;
    right: 0.75rem;
    z-index: 1;
    width: 1.9rem;
    height: 1.9rem;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
  }

  .hero {
    height: 9rem;
  }

  .hero img,
  .hero__fill {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 1.4rem 1.5rem 1.75rem;
  }

  .titleRow {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    word-break: keep-all;
  }

  .badge {
    align-self: center;
    padding: 0.1rem 0.45rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .gh {
    font-size: 0.78rem;
    color: var(--accent);
    text-decoration: none;
  }

  .gh:hover {
    text-decoration: underline;
  }

  .date {
    margin-top: 0.2rem;
    font-size: 0.78rem;
    color: var(--muted);
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.9rem;
  }

  .tag {
    padding: 0.15rem 0.5rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: 0.7rem;
    color: var(--muted);
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .prose {
    font-size: 0.87rem;
    line-height: 1.7;
    word-break: keep-all;
  }

  ul.prose {
    padding-left: 1.05rem;
    list-style: disc;
  }

  ul.prose li {
    margin-bottom: 0.25rem;
  }
</style>
