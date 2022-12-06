async function main() {
  let x1 = await task1(80000000);
  let x2 = await task2(80000000);
  let x3 = await task3(80000000);
  let x4 = await task4(80000000);
  console.log(x1 + x2 + x3 + x4); //16199999820000000
}

async function task1(max) {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < max; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task2(max) {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < max; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task3(max) {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < max; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task4(max) {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < max; index++) {
      result += index;
    }
    resolve(result);
  });
}
