const scatterData = [];

for (let i = 0; i < 5; i++) {
  const tempData: any = {};
  tempData["label"] = `label ${i}`;
  tempData["color"] = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.9)`;
  tempData["data"] = [];
  for (let i = 0; i < 20; i++) {
    tempData["data"].push({
      x: Math.floor(Math.random() * 120),
      y: Math.floor(Math.random() * 70),
    });
  }
  scatterData.push(tempData);
}

export { scatterData };
