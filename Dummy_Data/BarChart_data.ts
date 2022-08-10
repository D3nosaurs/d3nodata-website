const num = 10;

const barData: { x: string; y: number }[] = [];

for (let i = 0; i < num; i++) {
  barData.push({ x: i + "", y: Math.random() * 100 });
}
export { barData };
