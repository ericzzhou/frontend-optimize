function run(x, y) {
  let result = 0;
  for (let index = x; index <= y; index++) {
    result = result + index;
  }
  return result;
}

function* calculateGen() {
  yield run(0, 90000000);
  yield run(90000001, 180000000);
  return 0;
}
// 给定某个数值，从0加法计算到给定值，返回计算结果
function calculate() {
  let result = 0;
  //#region 第一种：原始方法（long task）
  //   for (let index = 0; index < 180000000; index++) {
  //     result += index;
  //   }
  //#endregion

  //#region 第二种：分开执行（long task）
  // result += run(0, 90000000);
  // result += run(90000001, 180000000);
  //#endregion

  //#region 第三种： 使用 Generator （long task）
  //   let g = calculateGen();

  //   var res = null;
  //   do {
  //     res = g.next();
  //     console.log(res);
  //     result += res.value;
  //   } while (res.done !== true);
  //#endregion

  //#region 第四种： 使用宏任务(计算结果错误)
  //   result += run(0, 90000000);
  //   setTimeout(() => {
  //     result += run(90000001, 180000000);
  //   }, 100);
  //#endregion

  //   result += await Promise.resolve(run(0, 90000000));
  //   result += await Promise.resolve(run(90000001, 180000000));

  // result += run(0, 90000000);
  // result += run(90000001, 180000000);

  //   result += run(0, 90000000);
  //   result += run(90000001, 180000000);

  //   result += run(1000000001, 2000000000);
  //   result += run(2000000001, 3000000000);
  //   result += run(3000000001, 4000000000);
  //   result += run(4000000001, 5000000000);
  //   result += run(5000000001, 6000000000);
  //   result += run(6000000001, 7000000000);
  //   result += run(7000000001, 8000000000);
  //   result += run(8000000001, 9000000000);
  //   result += run(9000000001, 10000000000);

  myinput.value = result;
}

/**
 * 时间切片执行器
 * @param {*} gen
 */
function timeSlicing(gen) {
  if (typeof gen != "function") {
    throw new Error("参数必须是一个 generator 函数");
  }

  var g = gen();
  if (!g || typeof g.next != "function") {
    return;
  }

  return function next() {
    var start = performance.now();
    var res = null;

    do {
      res = g.next();
    } while (res.done !== true && performance.now - start < 25);

    if (res.done) {
      return;
    }
    window.requestIdleCallback(next);
  };
}
