const sound = document.getElementById("sound");
const audio = document.getElementById("audio");
const icon = document.getElementById("icon");
let playing = false;

// Khi nhấn vào nút
sound.addEventListener("click", function () {
  if (playing) {
    audio.pause(); // Dừng âm thanh
    icon.src = "../img/valorant_icon/off_sound.png"; // Đổi hình ảnh thành "Play"
    icon.alt = "Play"; // Đổi mô tả hình ảnh thành "Play"
  } else {
    audio.currentTime = 0; // Đặt âm thanh về đầu
    audio.play(); // Phát âm thanh
    icon.src = "../img/valorant_icon/sound.png"; // Đổi hình ảnh thành "Pause"
    icon.alt = "Pause"; // Đổi mô tả hình ảnh thành "Pause"
  }
  playing = !playing; // Đảo ngược trạng thái
});

const choingay = document.getElementById("footer_button");
// Gắn sự kiện 'click' cho thẻ <a>
choingay.addEventListener("click", function (event) {
  // Hiển thị thông báo khi nhấn vào thẻ <a>
  alert("GAME SẮP RA MẮT VÀO 30/02/2025!!!!");
});