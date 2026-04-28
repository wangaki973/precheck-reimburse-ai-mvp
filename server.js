const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

const reimbursements = [
  { id: "BX-202604-0102", type: "差旅交通", amount: 18600, date: "2026-04-26", status: "审核中" },
  { id: "BX-202604-0089", type: "住宿", amount: 12400, date: "2026-04-22", status: "已驳回" },
  { id: "BX-202603-0211", type: "客户招待", amount: 8920, date: "2026-03-18", status: "已打款" },
  { id: "BX-202603-0156", type: "办公采购", amount: 6300, date: "2026-03-05", status: "已打款" },
  { id: "BX-202602-0888", type: "差旅交通", amount: 4280, date: "2026-02-26", status: "已打款" },
  { id: "BX-202602-0042", type: "餐饮", amount: 2150, date: "2026-02-14", status: "已驳回" },
  { id: "BX-202601-0310", type: "市内交通", amount: 1680, date: "2026-01-28", status: "已打款" },
  { id: "BX-202601-0199", type: "通讯补贴", amount: 880, date: "2026-01-15", status: "已打款" },
  { id: "BX-202512-0777", type: "差旅杂费", amount: 560, date: "2025-12-20", status: "已打款" },
  { id: "BX-202511-0601", type: "市内交通", amount: 128, date: "2025-11-08", status: "已打款" },
];

app.post("/api/ocr", (req, res) => {
  const fileName = req.body?.fileName || "未命名发票";
  res.json({
    ok: true,
    fileName,
    data: {
      date: "2026-04-28",
      category: "交通费",
      amount: 1680,
      description: "客户拜访往返交通",
      department: "华东销售部",
      projectCode: "XM-2026-0412",
      approver: "李经理",
      applicant: "张三",
    },
  });
});

app.post("/api/precheck", (req, res) => {
  const payload = req.body || {};
  const amount = Number(payload.amount || 0);
  let result = "通过";
  let reason = "符合当前报销规范，可继续提交。";

  if (amount > 8000) {
    result = "预警";
    reason = "金额较高，建议补充审批说明后提交。";
  }
  if (payload.category === "福利性支出") {
    result = "拦截";
    reason = "该类费用不在可报销范围内。";
  }

  res.json({
    ok: true,
    result,
    reason,
    recommendation:
      result === "通过"
        ? "可发起一审。"
        : result === "预警"
          ? "补充附件后可继续提交。"
          : "建议改走其他费用申请流程。",
  });
});

app.get("/api/reimbursements", (req, res) => {
  res.json({ ok: true, data: reimbursements });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

