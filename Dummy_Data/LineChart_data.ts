// Required data [{x: number, y: number}]

const datasets = [];
for (let i = 0; i < 4; i++) {
  const data: { x: Date; y: number }[] = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      y: Math.floor(Math.random() * 1000),
      x: new Date(i, 1, 1),
    });
  }
  datasets.push({
    label: `label ${i}`,
    color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
      Math.random() * 256
    })`,
    data: data,
  });
}
export { datasets };
