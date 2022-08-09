// Required data [{x: number, y: number}]

const num = 100;
const x: number = Math.floor(Math.random() * num);
const y: number = Math.floor(Math.random() * num);
const donutData: { x: number; y: number }[] = [
    {x: x, y: y}
];

export { donutData };
