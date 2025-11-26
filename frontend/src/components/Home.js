import { useEffect, useState } from "react";
import { fetchHomeAggregate } from "../api/home";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({ user: null, banners: [], recommends: [] });

  useEffect(() => {
    let mounted = true;
    fetchHomeAggregate()
      .then((res) => {
        if (!mounted) return;
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e?.message || "请求失败");
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div style={{ padding: 24 }}>加载中...</div>;
  if (error) return <div style={{ padding: 24 }}>错误：{error}</div>;

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h2>首页</h2>
      <section style={{ marginBottom: 16 }}>
        <h3>用户信息</h3>
        <div>昵称：{data?.user?.nickname || "-"}</div>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h3>轮播图</h3>
        <ul>
          {data?.banners?.map((b) => (
            <li key={b.id}>{b.title}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>推荐内容</h3>
        <ul>
          {data?.recommends?.map((r) => (
            <li key={r.id}>{r.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
