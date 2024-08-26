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

// MENU RESPONSIVE //////////////////////////////////
$(document).ready(function () {
  $("#menu_mobile").click(function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    // Kiểm tra trạng thái hiện tại của #valo và chuyển đổi giữa display: none và display: block;
    if ($("#valo").css("display") === "none") {
      $("#valo").css("display", "block");
      $("#overlay").fadeOut(); // Ẩn lớp phủ với hiệu ứng mờ dần
    } else {
      $("#valo").css("display", "none");
      $("#overlay").fadeIn(); // Hiển thị lớp phủ với hiệu ứng mờ dần
    }
    // Thực hiện slideToggle cho .mobile
    $(".mobile").slideToggle();
  });
});

// ///////////////////////////////////////////////////////
$(document).ready(function () {
  $("#sub").click(function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    if ($(".submn").css("display") === "none") {
      $(".submn").css("display", "block"); // Hiển thị phần tử submn
    } else {
      $(".submn").css("display", "none");
    }
  });
});