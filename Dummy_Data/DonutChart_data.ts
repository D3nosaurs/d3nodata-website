// Required data [{x: number, y: number}]

const num = 6;
// const x: number = Math.random() * num;
// const y: number = Math.random() * num;
const donutData: { ages: number; count: number }[] = [];

for (let i = 0; i < num; i++) {
  donutData.push({ ages: i, count: Math.floor(Math.random() * 100) });
}

export { donutData };
