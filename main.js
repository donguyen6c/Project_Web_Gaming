const soundToggle = document.getElementById("soundToggle");
const backgroundAudio = document.getElementById("backgroundAudio");
const toggleIcon = document.getElementById("toggleIcon");
let isPlaying = false;

// Khi nhấn vào nút
soundToggle.addEventListener("click", function () {
  if (isPlaying) {
    backgroundAudio.pause(); // Dừng âm thanh
    toggleIcon.src = "img/valorant_icon/off_sound.png"; // Đổi hình ảnh thành "Play"
    toggleIcon.alt = "Play"; // Đổi mô tả hình ảnh thành "Play"
  } else {
    backgroundAudio.currentTime = 0; // Đặt âm thanh về đầu
    backgroundAudio.play(); // Phát âm thanh
    toggleIcon.src = "img/valorant_icon/sound.png"; // Đổi hình ảnh thành "Pause"
    toggleIcon.alt = "Pause"; // Đổi mô tả hình ảnh thành "Pause"
  }
  isPlaying = !isPlaying; // Đảo ngược trạng thái
});
