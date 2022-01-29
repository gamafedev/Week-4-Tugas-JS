import { Table } from "./tableLibrary.js";

const table = new Table({
  columns: ["Name", "Email"],
  data: [
    ["Gama Prabowo", "gprabowo41@gmail.com"],
    ["Zalfa Dhia", "zalfadhia@gmail.com"]
  ]
});
const app = document.getElementById("app");
table.render(app);