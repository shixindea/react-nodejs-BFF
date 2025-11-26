import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
  res.json({ id: 1, nickname: "Alice" });
});

router.get("/banners", (req, res) => {
  res.json([
    { id: 101, title: "开学季大促" },
    { id: 102, title: "双11狂欢" },
    { id: 103, title: "黑五精选" },
  ]);
});

router.get("/recommends", (req, res) => {
  res.json([
    { id: 201, title: "新手必读：React 入门" },
    { id: 202, title: "Express 快速指南" },
    { id: 203, title: "Axios 使用技巧" },
  ]);
});

export default router;
