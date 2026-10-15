// ===== 计数器 =====
let count = 0;

function changeCount(delta) {
  count += delta;
  document.getElementById('counter').textContent = count;
}

function resetCount() {
  count = 0;
  document.getElementById('counter').textContent = count;
}

// ===== 深色模式切换 =====
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// ===== 随机颜色 =====
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  const box = document.getElementById('colorBox');
  box.style.background = hex;
  box.textContent = hex.toUpperCase();
}

// ===== 模态框 =====
function openModal() {
  document.getElementById('modalOverlay').classList.add('show');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}

function closeModalBg(e) {
  if (e.target.id === 'modalOverlay') closeModal();
}

// ===== Toast 提示 =====
let toastTimer;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}
