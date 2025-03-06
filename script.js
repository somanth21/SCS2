import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4';

// Keep the config values but don't show UI for them
const config = {
  theme: 'system',
  scrub: 0,
  x: 39,
  y: 50,
  scale: 33,
  font: 10,
  svg: false,
  src: 'https://videos.pexels.com/video-files/6143460/6143460-hd_1920_1080_24fps.mp4', // Pexels video URL
};

const video = document.querySelector('video');

const ctrl = new Pane({
  title: 'Config',
  expanded: true,
});

// Keep the update function to apply the config values
const update = () => {
  document.documentElement.style.setProperty('--x', config.x);
  document.documentElement.style.setProperty('--y', config.y);
  document.documentElement.style.setProperty('--scale', config.scale);
  document.documentElement.style.setProperty('--font', config.font);
  document.documentElement.dataset.svg = config.svg;
  video.src = config.src;
  font.disabled = config.svg;
};

ctrl.addBinding(config, 'scale', {
  min: 1,
  max: 100,
  step: 1,
  label: 'Scale Start',
});

const origin = ctrl.addFolder({ title: 'Transform Origin' });
origin.addBinding(config, 'x', {
  min: 0,
  max: 100,
  step: 1,
  label: 'X',
});

origin.addBinding(config, 'y', {
  min: 0,
  max: 100,
  step: 1,
  label: 'Y',
});

const font = ctrl.addBinding(config, 'font', {
  min: 1,
  max: 20,
  step: 0.1,
  label: 'Font Level',
});

ctrl.addBinding(config, 'svg', {
  label: 'Use SVG',
});

ctrl.on('change', update);
update(); // Still call update once to apply the initial config