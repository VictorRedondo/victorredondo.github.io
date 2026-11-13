document.getElementById('y').textContent = new Date().getFullYear();
  const menu = document.getElementById('apps');
  const btn = menu.querySelector('button');
  const set = open => { menu.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); };
  const hover = matchMedia('(hover: hover)').matches;
  btn.addEventListener('click', e => { e.stopPropagation(); set(hover ? true : !menu.classList.contains('open')); });
  if (hover) {
    menu.addEventListener('mouseenter', () => set(true));
    menu.addEventListener('mouseleave', () => set(false));
  }
  document.addEventListener('click', e => { if (!menu.contains(e.target)) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { set(false); btn.focus(); } });
