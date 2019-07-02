const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello Freighthub!"));

app.get("/update/:id/:data", (req, res) => {
  console.log("start at: ", new Date().toISOString());
  const shipmentSearchIndex = new ShipmentSearchIndex();
  shipmentSearchIndex
    .updateShipment(req.params.id, req.params.data)
    .then(data => {
      console.log("4- done");
      console.log("end at: ", new Date().toISOString());
      res.send(data);
    });
});

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("2- sleep");
    }, ms);
  });
}
async function randomDelay() {
  const randomTime = Math.round(Math.random() * 1000);
  // const randomTime = 3000;
  console.log("1- random");

  return sleep(randomTime);
}
class ShipmentSearchIndex {
  async updateShipment(id, shipmentData) {
    const startTime = new Date();
    await randomDelay();
    const endTime = new Date();
    console.log(`id is: ${id}, shipmentDate is: ${shipmentData}`);
    console.log(
      `3- update ${id}@${startTime.toISOString()} finished@${endTime.toISOString()}`
    );
    return { startTime, endTime };
  }
}

app.listen(port, () => console.log(`I am runing on port ${port}!`));
