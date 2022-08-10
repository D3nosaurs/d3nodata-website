const barData: { x: string; y: number }[] = [];
const num = 30;

for (let i = 0; i < num; i++) {
  barData.push({
    x: i + "",
    y: Math.random() * 1000,
  });
}
export { barData };
