// Required data [{x: number, y: number}]

const num = 30;
// const x: number = Math.random() * 100;
// const y: number = Math.random() * 100;
const lineData: { x: number; y: number }[] = [];

for (let i = 0; i < num; i++) {
  lineData.push({ x: Math.random() * 100, y: Math.random() * 100 });
}
export { lineData };
