const { add } = require("./main");

function testAdd() {
  if (add(1, 2) === 3) {
    console.log("✅ Test passed");
  } else {
    console.log("❌ Test failed");
  }
}

testAdd();
