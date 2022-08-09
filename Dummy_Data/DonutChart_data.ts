// Required data [{x: number, y: number}]

const num = 30;
// const x: number = Math.random() * num;
// const y: number = Math.random() * num;
const donutData: { x: number; y: number }[] = [];

for (let i = 0; i < num; i++) {
  donutData.push({ x: Math.random() * 100, y: Math.random() * 100 });
}

export { donutData };
