import client from "./client";

export const fetchHomeAggregate = async () => {
  const { data } = await client.get("/api/home/aggregate");
  return data;
};
