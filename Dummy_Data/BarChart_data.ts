// Required: labels: string[], data: number[]

const barLabels: string[] = [];
const barData: number[] = [];
const num = 100;

for (let i = 0; i < num; i++) {
  barLabels.push(i + "");
  barData.push(i);
}

export { barData, barLabels };
