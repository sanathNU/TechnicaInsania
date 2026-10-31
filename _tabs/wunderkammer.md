---
# the default layout is 'page'
title: Wunderkammer
icon: fas fa-flask
order: 5
---

A cabinet of curiosities: things I got curious about and built, some made with AI.
Most are hosted on [Curiositas](https://sanathnu.github.io/Curiositas/); the write-ups of what I learned live here.

{% for p in site.data.projects %}
<div class="project mb-5">
  <h3 class="mt-4"><a href="{{ p.url }}">{{ p.name }}</a></h3>
  <p class="text-muted small mb-2">
    {{ p.toolchain }} · since {{ p.started }} · <a href="{{ p.repo }}">source</a>
    {%- if p.post %}
      {%- assign post = site.posts | where_exp: "x", "x.slug == p.post" | first %}
      {%- if post %} · <a href="{{ post.url | relative_url }}">write-up</a>{% endif %}
    {%- endif %}
  </p>
  {% if p.thumbnail %}
  <a href="{{ p.url }}"><img src="{{ p.thumbnail }}" alt="{{ p.name }}" loading="lazy" class="mb-2" style="width:100%;border:1px solid var(--main-border-color, #ddd)"></a>
  {% endif %}
  <p>{{ p.blurb }}</p>
</div>
{% endfor %}
