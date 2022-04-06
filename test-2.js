// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao.
// Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ý tưởng làm:
// Bước 1. Dùng vòng lặp để tách ra làm 2 mảng
// Bước 2. Viết hàm để tính tổng của 1 mảng

const listNumber = [60, 40, 55, 75, 64];

const alternatingSums = (array) => {
  const array1 = [];
  const array2 = [];

  //Em dùng index để chia mảng
  for (let i = 0; i < array.length; i++) {
    //   Nếu index chia hết cho 2 thì sẽ là các phần tử ở vị trí 0,2,4,6,...
    if (i % 2 === 0) {
      array1.push(array[i]);
    } else {
      // Ngược lại, nếu k chia hết cho 2 thì sẽ là các phần tử ở vị trí 1,3,5,7,...
      array2.push(array[i]);
    }
  }

  //   vì đề bài yêu cầu là trả về, nên sẽ dùng return
  //   const sumArray1 = calSumArray(array1);
  //   const sumArray2 = calSumArray(array2);
  //   return [sumArray1, sumArray2];
  //   nếu gọn hơn
  return [calSumArray(array1), calSumArray(array2)];
};

// Bước 2: viết hàm tính tổng
const calSumArray = (array) => {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }

  return sum;
};

console.log(alternatingSums(listNumber));
