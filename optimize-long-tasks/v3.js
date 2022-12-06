// https://web.dev/optimize-long-tasks/

async function main() {
  const tasks = [task1, task2, task3, task4];

  let deadline = performance.now() + 50;

  let result = 0;
  while (tasks.length > 0) {
    if (navigator.scheduling?.isInputPending() || performance.now() >= deadline) {
      await yieldToMain();
      deadline = performance.now() + 50;
      continue;
    }
    const task = tasks.shift();
    result += await task();
  }
  console.log(result); //16199999820000000
}

function yieldToMain() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function task1() {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < 80000000; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task2() {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < 80000000; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task3() {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < 80000000; index++) {
      result += index;
    }
    resolve(result);
  });
}

async function task4() {
  return new Promise((resolve) => {
    let result = 0;
    for (let index = 0; index < 80000000; index++) {
      result += index;
    }
    resolve(result);
  });
}
