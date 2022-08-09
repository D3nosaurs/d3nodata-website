// Required: labels: string[], data: number[]
const barLabels: string[] = [];
const barData: number[] = [];
const num = 50;

for (let i = 0; i < num; i++) {
  barLabels.push(i + "");
  barData.push(Math.random() * 100);
}
export { barData, barLabels };