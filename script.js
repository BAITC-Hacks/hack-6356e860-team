document.addEventListener('DOMContentLoaded', () => {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach((node) => {
    const targetValue = node.textContent.trim();
    if (!targetValue.includes('%') && !targetValue.includes(' ')) {
      node.setAttribute('data-value', targetValue);
      node.textContent = '0';

      const end = Number(targetValue.replace(/[^\d]/g, ''));
      const root = node;
      let current = 0;
      const step = Math.max(1, Math.ceil(end / 30));
      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          root.textContent = targetValue;
          clearInterval(timer);
          return;
        }
        root.textContent = `${current}`;
      }, 35);
    }
  });
});
