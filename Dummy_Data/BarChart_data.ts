const barDatasets: {
  label: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
}[] = [];
for (let i = 0; i < 5; i++) {
  const data: { x: string; y: number }[] = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      y: Math.random() * 1000,
      x: i + "",
    });
  }
  barDatasets.push({
    label: `label ${i}`,
    color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.9)`,
    data: data,
  });
}

export { barDatasets };