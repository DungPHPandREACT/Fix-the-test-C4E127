// Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

//Ý tưởng làm bài này, có thể cách này chưa tối ưu nhưng nó khá là đơn giản
//Bước 1. Kiểm tra xem các phần tử trong mảng, chuỗi có kí tự dài nhất là bao nhiêu
//Bước 2. Khi có kí tự dài nhất của 1 chuỗi rồi thì sẽ kiểm tra xem trong mảng, phần tử nào có độ dài bằng max string thì sẽ lấy.

const listName = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];

const allLongestStrings = (inputArray) => {
  const maxString = checkMaxString(inputArray);
  //   Bước 2: sau khi biết được 1 chuỗi dài nhất là có bao nhiêu kí tự thì sẽ dùng hàm filter để lọc, vì đề bài yêu cầu trả về 1 array mới
  //   const newListName = inputArray.filter((e) => e.length === maxString);
  //   vì đề bài yêu cầu là trả về mảng mới, nên sẽ dùng return
  return inputArray.filter((e) => e.length === maxString);
};

// Bước 1: Viết hàm để kiểm tra xem chuỗi có kí tự dài nhất là bao nhiêu
const checkMaxString = (inputArray) => {
  let maxString = 0;
  for (const name of inputArray) {
    if (name.length > maxString) {
      maxString = name.length;
    }
  }

  return maxString;
};

console.log(allLongestStrings(listName));
