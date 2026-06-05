/**
 * Mock 数据
 */
const MOCK = {
  // 当前登录用户
  user: {
    id: 'u1',
    name: '张明',
    phone: '13800138000',
    role: 'admin', // admin | salesman | finance
  },

  // 用户列表
  users: [
    { id: 'u1', name: '张明', phone: '13800138000', role: 'admin' },
    { id: 'u2', name: '李强', phone: '13800138001', role: 'salesman' },
    { id: 'u3', name: '王芳', phone: '13800138002', role: 'salesman' },
    { id: 'u4', name: '赵丽', phone: '13800138003', role: 'finance' },
    { id: 'u5', name: '陈伟', phone: '13800138004', role: 'salesman' },
    { id: 'u6', name: '刘洋', phone: '13800138005', role: 'salesman' },
    { id: 'u7', name: '孙静', phone: '13800138006', role: 'finance' },
  ],

  // 回款台账
  ledgers: [
    { id: 'L001', region: '华东', projectNo: 'PRJ-2026-001', projectName: '上海浦东新区智慧园区项目', company: '上海智园科技有限公司', amount: 2500000.00, type: '合同款', age: 45, category: '重点', collectStatus: '待回款', overdueStatus: '已逾期', planDate: '2026-04-15', collector: 'u2', receivedAmount: 0, diffAmount: 2500000.00, receivedDate: '', remark: '客户方资金审批流程较长' },
    { id: 'L002', region: '华南', projectNo: 'PRJ-2026-002', projectName: '深圳龙华区数据中心项目', company: '深圳数通科技有限公司', amount: 1800000.00, type: '合同款', age: 30, category: '风险', collectStatus: '待回款', overdueStatus: '即将逾期', planDate: '2026-06-10', collector: 'u3', receivedAmount: 500000.00, diffAmount: 1300000.00, receivedDate: '2026-05-20', remark: '' },
    { id: 'L003', region: '华北', projectNo: 'PRJ-2026-003', projectName: '北京朝阳区智慧交通项目', company: '北京智慧交通集团', amount: 3200000.00, type: '合同款', age: 60, category: '重点', collectStatus: '已承诺', overdueStatus: '已逾期', planDate: '2026-05-01', collector: 'u5', receivedAmount: 1500000.00, diffAmount: 1700000.00, receivedDate: '', remark: '客户承诺5月底前支付' },
    { id: 'L004', region: '华东', projectNo: 'PRJ-2026-004', projectName: '杭州西湖区城市大脑项目', company: '杭州城市大脑有限公司', amount: 950000.00, type: '服务费', age: 15, category: '正常', collectStatus: '已回款', overdueStatus: '未逾期', planDate: '2026-05-20', collector: 'u2', receivedAmount: 950000.00, diffAmount: 0, receivedDate: '2026-05-18', remark: '' },
    { id: 'L005', region: '西南', projectNo: 'PRJ-2026-005', projectName: '成都高新区政务云项目', company: '成都政务云科技有限公司', amount: 4200000.00, type: '合同款', age: 90, category: '风险', collectStatus: '待回款', overdueStatus: '已逾期', planDate: '2026-03-01', collector: 'u6', receivedAmount: 0, diffAmount: 4200000.00, receivedDate: '', remark: '多次催收无果，需升级处理' },
    { id: 'L006', region: '华南', projectNo: 'PRJ-2026-006', projectName: '广州天河区智慧社区项目', company: '广州智慧社区服务公司', amount: 1500000.00, type: '合同款', age: 22, category: '正常', collectStatus: '已承诺', overdueStatus: '未逾期', planDate: '2026-06-25', collector: 'u3', receivedAmount: 0, diffAmount: 1500000.00, receivedDate: '', remark: '' },
    { id: 'L007', region: '华中', projectNo: 'PRJ-2026-007', projectName: '武汉光谷物联网平台项目', company: '武汉物联网科技有限公司', amount: 2800000.00, type: '保证金', age: 35, category: '重点', collectStatus: '待回款', overdueStatus: '即将逾期', planDate: '2026-06-15', collector: 'u2', receivedAmount: 800000.00, diffAmount: 2000000.00, receivedDate: '', remark: '质保金部分有争议' },
    { id: 'L008', region: '华北', projectNo: 'PRJ-2026-008', projectName: '天津滨海新区安防项目', company: '天津滨海安防有限公司', age: 50, amount: 680000.00, type: '服务费', category: '正常', collectStatus: '坏账关闭', overdueStatus: '已逾期', planDate: '2026-02-28', collector: 'u5', receivedAmount: 0, diffAmount: 680000.00, receivedDate: '', remark: '客户已破产清算' },
    { id: 'L009', region: '华东', projectNo: 'PRJ-2026-009', projectName: '南京玄武区智慧教育项目', company: '南京智慧教育科技公司', amount: 1100000.00, type: '合同款', age: 28, category: '正常', collectStatus: '已回款', overdueStatus: '未逾期', planDate: '2026-05-25', collector: 'u2', receivedAmount: 1100000.00, diffAmount: 0, receivedDate: '2026-05-22', remark: '' },
    { id: 'L010', region: '西北', projectNo: 'PRJ-2026-010', projectName: '西安高新区雪亮工程项目', company: '西安雪亮科技有限公司', amount: 5600000.00, type: '合同款', age: 120, category: '风险', collectStatus: '待回款', overdueStatus: '已逾期', planDate: '2026-01-15', collector: 'u6', receivedAmount: 2000000.00, diffAmount: 3600000.00, receivedDate: '', remark: '政府项目，回款周期长' },
    { id: 'L011', region: '华南', projectNo: 'PRJ-2026-011', projectName: '珠海横琴新区智慧口岸项目', company: '珠海横琴科技公司', amount: 780000.00, type: '保证金', age: 18, category: '正常', collectStatus: '已承诺', overdueStatus: '未逾期', planDate: '2026-07-01', collector: 'u3', receivedAmount: 0, diffAmount: 780000.00, receivedDate: '', remark: '' },
    { id: 'L012', region: '华东', projectNo: 'PRJ-2026-012', projectName: '合肥包河区智慧停车项目', company: '合肥智慧停车有限公司', amount: 320000.00, type: '服务费', age: 8, category: '正常', collectStatus: '已回款', overdueStatus: '未逾期', planDate: '2026-05-28', collector: 'u2', receivedAmount: 320000.00, diffAmount: 0, receivedDate: '2026-05-28', remark: '' },
  ],

  // 催收记录
  collectRecords: [
    { id: 'R001', ledgerId: 'L001', type: '催收', content: '电话催收：客户表示正在走审批流程', operator: 'u2', time: '2026-05-10 14:30' },
    { id: 'R002', ledgerId: 'L001', type: '催收', content: '发送催收函', operator: 'u2', time: '2026-05-20 09:15' },
    { id: 'R003', ledgerId: 'L003', type: '状态变更', content: '状态由"待回款"变更为"已承诺"', operator: 'u5', time: '2026-04-15 10:00' },
    { id: 'R004', ledgerId: 'L003', type: '延期', content: '申请延期：原计划2026-05-01，申请延期至2026-05-30', operator: 'u5', time: '2026-04-28 16:00' },
    { id: 'R005', ledgerId: 'L004', type: '到账', content: '到账950,000.00元', operator: 'u4', time: '2026-05-18 11:00' },
    { id: 'R006', ledgerId: 'L004', type: '状态变更', content: '状态由"已承诺"变更为"已回款"', operator: 'u4', time: '2026-05-18 11:05' },
  ],

  // 延期审批
  delayApprovals: [
    { id: 'D001', ledgerId: 'L003', ledgerName: '北京朝阳区智慧交通项目', applicant: 'u5', applicantName: '陈伟', originalDate: '2026-05-01', newDate: '2026-05-30', reason: '客户内部审批流程延迟，预计5月底可完成支付', status: '待审批', opinion: '' },
    { id: 'D002', ledgerId: 'L006', ledgerName: '广州天河区智慧社区项目', applicant: 'u3', applicantName: '王芳', originalDate: '2026-06-25', newDate: '2026-07-10', reason: '客户财务总监出差，需延后', status: '待审批', opinion: '' },
    { id: 'D003', ledgerId: 'L011', ledgerName: '珠海横琴新区智慧口岸项目', applicant: 'u3', applicantName: '王芳', originalDate: '2026-07-01', newDate: '2026-07-20', reason: '项目验收时间推迟', status: '已通过', opinion: '情况属实，同意延期', approver: 'u1', approverName: '张明', approvalTime: '2026-05-28 15:30' },
    { id: 'D004', ledgerId: 'L007', ledgerName: '武汉光谷物联网平台项目', applicant: 'u2', applicantName: '李强', originalDate: '2026-06-15', newDate: '2026-07-15', reason: '保证金争议需要时间协商', status: '已拒绝', opinion: '请按原计划收款，保证金争议可单独处理', approver: 'u1', approverName: '张明', approvalTime: '2026-05-20 10:00' },
  ],

  // 提醒规则
  reminderRules: [
    { id: 'RM001', name: '即将到期提醒-3天', enabled: true, conditions: '距离承诺日期 3 天', targets: ['salesman'], frequency: '每日', content: '项目【{项目名称}】的应收款将于3天后到期，应收金额【{应收金额}】元，请及时跟进催收。' },
    { id: 'RM002', name: '即将到期提醒-1天', enabled: true, conditions: '距离承诺日期 1 天', targets: ['salesman', 'admin'], frequency: '立即', content: '项目【{项目名称}】的应收款将于明天到期！金额【{应收金额}】元，请立即联系客户确认回款。' },
    { id: 'RM003', name: '逾期1天提醒', enabled: true, conditions: '逾期 1 天', targets: ['salesman', 'admin'], frequency: '每日', content: '项目【{项目名称}】已逾期1天，逾期金额【{差额}】元，请尽快催收。' },
    { id: 'RM004', name: '逾期7天升级提醒', enabled: true, conditions: '逾期 7 天', targets: ['admin', 'finance'], frequency: '立即', content: '⚠️ 项目【{项目名称}】已逾期7天，逾期金额【{差额}】元，请升级处理。' },
    { id: 'RM005', name: '逾期30天严重警告', enabled: false, conditions: '逾期 30 天', targets: ['admin'], frequency: '每周', content: '🚨 严重警告：项目【{项目名称}】已逾期30天，金额【{差额}】元，可能面临坏账风险！' },
  ],

  // 消息通知
  notifications: [
    { id: 'N001', type: '催收提醒', title: '逾期提醒：上海浦东新区智慧园区项目', content: '项目【上海浦东新区智慧园区项目】已逾期49天，逾期金额2,500,000.00元，请尽快催收。', time: '2026-06-03 09:00', read: false },
    { id: 'N002', type: '催收提醒', title: '即将到期提醒：深圳龙华区数据中心项目', content: '项目【深圳龙华区数据中心项目】的应收款将于7天后到期，应收金额1,300,000.00元，请及时跟进催收。', time: '2026-06-03 09:00', read: false },
    { id: 'N003', type: '审批通知', title: '延期审批待处理', content: '陈伟提交了项目【北京朝阳区智慧交通项目】的延期申请，请尽快审批。', time: '2026-06-02 14:00', read: true },
    { id: 'N004', type: '回款通知', title: '回款到账通知', content: '项目【杭州西湖区城市大脑项目】已到账950,000.00元，请知悉。', time: '2026-05-18 11:00', read: true },
    { id: 'N005', type: '审批通知', title: '延期审批结果', content: '您的延期申请（武汉光谷物联网平台项目）已被拒绝，理由：请按原计划收款，保证金争议可单独处理。', time: '2026-05-20 10:00', read: true },
    { id: 'N006', type: '催收提醒', title: '严重逾期提醒：成都高新区政务云项目', content: '项目【成都高新区政务云项目】已逾期94天，金额4,200,000.00元，属于风险项目，请立即处理。', time: '2026-06-03 08:00', read: false },
    { id: 'N007', type: '系统通知', title: '新增台账提醒', content: '您被分配为项目【合肥包河区智慧停车项目】的催收负责人，请关注。', time: '2026-05-15 09:00', read: true },
    { id: 'N008', type: '审批通知', title: '延期审批待处理', content: '王芳提交了项目【广州天河区智慧社区项目】的延期申请，请尽快审批。', time: '2026-06-01 16:30', read: false },
  ],

  // 仪表盘统计
  dashboard: {
    todayCollect: 12,
    overdue: 5,
    monthAmount: 3580000.00,
    riskCount: 3,
    regionStats: [
      { region: '华东', count: 5, amount: 4760000 },
      { region: '华南', count: 3, amount: 4080000 },
      { region: '华北', count: 2, amount: 3880000 },
      { region: '西南', count: 1, amount: 4200000 },
      { region: '华中', count: 1, amount: 2800000 },
      { region: '西北', count: 1, amount: 5600000 },
    ],
    statusStats: [
      { status: '待回款', count: 5, amount: 15980000 },
      { status: '已承诺', count: 3, amount: 3980000 },
      { status: '已回款', count: 3, amount: 2370000 },
      { status: '坏账关闭', count: 1, amount: 680000 },
    ],
    trendData: [
      { month: '2026-01', amount: 1200000 },
      { month: '2026-02', amount: 1800000 },
      { month: '2026-03', amount: 2100000 },
      { month: '2026-04', amount: 2500000 },
      { month: '2026-05', amount: 3580000 },
    ],
  }
};

// 模拟网络延迟
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms || 300));
}

// 模拟API调用
async function mockFetch(data, ms) {
  await delay(ms);
  return JSON.parse(JSON.stringify(data));
}
