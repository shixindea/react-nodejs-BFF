import { fetchUser, fetchBanners, fetchRecommends } from "../services/mockService.js";

export async function getHomeAggregate(req, res) {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchBanners(),
    fetchRecommends(),
  ]);

  const map = (idx) => {
    const r = results[idx];
    return r.status === "fulfilled" ? r.value : null;
  };

  const errors = results
    .map((r, i) => (r.status === "rejected" ? { index: i, message: r.reason?.message } : null))
    .filter(Boolean);

  const payload = {
    user: map(0),
    banners: map(1) || [],
    recommends: map(2) || [],
    errors,
  };

  if (errors.length > 0) {
    res.status(207).json(payload);
  } else {
    res.json(payload);
  }
}
