// Xây dựng trang web "colorOne Picker". Với các chức năng sau:
//          +Xây dựng trang web pick mã màu ngẫu nhiên khi bấm nút
//          +Hiện mã màu hex, cho phép người dùng bấm nút copy để copy mã
//          +Cho phép chọn màu gradient
//          +Background trang web sẽ thay đổi màu tương ứng với mã màu đã chọn.

// Bài này thì mình sẽ vừa làm vừa search code :)), nhưng quan trọng là mọi người copy code xong phải hiểu code

let color1 = '#000000';
let color2 = '#000000';
// Ý 1: Pick mã màu ngẫu nhiêu khi bấm nút
const generateColor = document.getElementById('generateColor');
const generateColor2 = document.getElementById('generateColor2');
const colorOne = document.getElementById('color1');
const colorTwo = document.getElementById('color2');
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
  colorOne.value = '#' + randomColor;
  color1 = '#' + randomColor;
};

generateColor.addEventListener('click', setBg);
setBg();

// Xong luôn cả ý 4 :))

// Tiếp theo làm đến ý 2, lại search w3
document.getElementById('copyColor').onclick = () => {
  /* Get the text field */
  const copyText = document.getElementById('color1');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert('Copied the text: ' + copyText.value);
};

// Ý 3: cho phép chọn màu gradient, màu gradient là màu kết hợp, nên chắc làm 1 ô input nữa rồi cho 2 màu kết hợp lại với nhau :Đ
// Random color2:
const randomColor2 = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorTwo.value = '#' + randomColor;
  color2 = '#' + randomColor;
  //   Thuộc tính này để set background
  document.body.style.backgroundImage = `linear-gradient(${color1}, ${color2})`;
};

generateColor2.addEventListener('click', randomColor2);

// Có màu linear-gradient rồi, mọi người dùng css, set width với height lại cho đẹp thôi :DDD
