/**
 * 通用工具函数
 */

// Toast 提示
function showToast(msg, duration = 1800) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// 格式化金额（千分位）
function formatMoney(num) {
  if (num == null || num === '') return '-';
  return Number(num).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// 格式化日期
function formatDate(dateStr) {
  if (!dateStr) return '-';
  return dateStr;
}

// 获取催收状态标签
function getCollectStatusTag(status) {
  const map = {
    '待回款': '<span class="status-tag pending">待回款</span>',
    '已承诺': '<span class="status-tag promised">已承诺</span>',
    '已回款': '<span class="status-tag paid">已回款</span>',
    '坏账关闭': '<span class="status-tag bad">坏账关闭</span>',
  };
  return map[status] || status;
}

// 获取逾期状态标签
function getOverdueStatusTag(status) {
  const map = {
    '未逾期': '<span class="status-tag normal">未逾期</span>',
    '即将逾期': '<span class="status-tag soon">即将逾期</span>',
    '已逾期': '<span class="status-tag overdue">已逾期</span>',
  };
  return map[status] || status;
}

// 获取审批状态标签
function getApprovalStatusTag(status) {
  const map = {
    '待审批': '<span class="status-tag approving">待审批</span>',
    '已通过': '<span class="status-tag approved">已通过</span>',
    '已拒绝': '<span class="status-tag rejected">已拒绝</span>',
  };
  return map[status] || status;
}

// 获取用户名
function getUserName(uid) {
  const user = MOCK.users.find(u => u.id === uid);
  return user ? user.name : '-';
}

// 获取通知类型标签
function getNotificationTypeTag(type) {
  const colors = {
    '催收提醒': '#ff4d4f',
    '审批通知': '#fa8c16',
    '回款通知': '#52c41a',
    '系统通知': '#1677ff',
  };
  return `<span style="color:${colors[type]||'#666'};font-size:11px">${type}</span>`;
}

// 获取当前用户角色过滤后的台账数据
function getFilteredLedgers() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (!user) return [...MOCK.ledgers];
  if (user.role === 'salesman') {
    return MOCK.ledgers.filter(l => l.collector === user.id);
  }
  return [...MOCK.ledgers];
}

// 获取当前用户角色过滤后的延期审批数据
function getFilteredApprovals() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (!user) return [...MOCK.delayApprovals];
  if (user.role === 'salesman') {
    return MOCK.delayApprovals.filter(a => a.applicant === user.id);
  }
  return [...MOCK.delayApprovals];
}

// 计算逾期天数
function getOverdueDays(planDate) {
  if (!planDate) return 0;
  const plan = new Date(planDate);
  const now = new Date('2026-06-03');
  return Math.floor((now - plan) / (1000 * 60 * 60 * 24));
}

// 防抖
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 渲染空状态
function renderEmpty(text = '暂无数据') {
  return `
    <div class="empty-state">
      <div class="empty-icon">📋</div>
      <div class="empty-text">${text}</div>
    </div>
  `;
}

// 渲染加载状态
function renderLoading() {
  return `
    <div class="loading">
      <div class="spinner"></div>
    </div>
  `;
}

// 打开弹窗
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

// 关闭弹窗
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// 关闭所有弹窗
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.classList.remove('show');
  });
  document.body.style.overflow = '';
}

// 点击遮罩关闭弹窗
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// 表单校验
function validateForm(formEl) {
  let valid = true;
  const groups = formEl.querySelectorAll('.form-group');
  groups.forEach(g => {
    const input = g.querySelector('.form-input, .form-select, .form-textarea');
    if (input && input.hasAttribute('data-required') && !input.value.trim()) {
      g.classList.add('error');
      valid = false;
    } else {
      g.classList.remove('error');
    }
  });
  return valid;
}
