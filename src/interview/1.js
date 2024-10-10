const allWithProgress = (promises, onProgress) => {
  var complete = 0;
  return Promise.all(
    promises.map((promise) => {
      promise.then((result) => {
        complete++;
        const completePercentage = (complete / promises.length) * 100;
        onProgress(completePercentage.toFixed(2));
        return result;
      });
    }),
  );
};

const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve('Task1'), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve('Task1'), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve('Task1'), 3500)),
];

const onProgress = (number) => {
  console.log(number);
};

allWithProgress(
  tasks.map((t) => t()),
  onProgress,
);
