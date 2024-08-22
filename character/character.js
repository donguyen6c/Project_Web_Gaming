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
//CHOINGAY////////////////////////////////////////////////////////////////////////
const choingay = document.getElementById("footer_button");
// Gắn sự kiện 'click' cho thẻ <a>
choingay.addEventListener("click", function (event) {
  // Hiển thị thông báo khi nhấn vào thẻ <a>
  alert("GAME SẮP RA MẮT VÀO 30/02/2025!!!!");
});
///////////////////////////////////////////////////////////////////////////////////
//HIEN THI AGENT////////////////////////////////////////////////////////////////////////
function batHienThi(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}
function tatHienThi(event) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    // Nếu click bên ngoài thì đóng modal
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}
//FILTER AGENTS//////////////////////////////////////////////////////////////////////////////
// Lọc agents theo role
function filterAgents(role) {
  // Ẩn tất cả các thẻ agent trước khi thực hiện trì hoãn
  document.querySelectorAll(".agents .agent").forEach((agent) => {
    agent.style.display = "none";
  });

  // Đợi 0.3 giây trước khi hiển thị các thẻ agent
  setTimeout(() => {
    document.querySelectorAll(".agents .agent").forEach((agent) => {
      if (role === "all" || agent.classList.contains(role)) {
        agent.style.display = "block";
      } else {
        agent.style.display = "none";
      }
    });
  }, 300);

// Thay đổi mô tả theo role
  const mo_taRole = {
    all: "Đây là toàn bộ agents trong VALORANT. Tùy vào phong cách thi đấu cũng như sở thích của mình, bạn hãy chọn cho bản thân đặc vụ phù hợp  để có thể góp sức mang về chiến thắng cho đội.",
    controller:
      "Controllers là những agents với khả năng kiểm soát và khống chế bản đồ, sẽ tạo ra những khu vực che chắn tầm nhìn nhằm gia tăng khả năng chiếm giữ và kiểm soát khu vực đó.",
    duelist:
      "Duelists là những agents tấn công trong Valorant, xuất sắc trong các trận chiến 1v1 và mục tiêu của họ là xuyên thủng hàng phòng ngự của kẻ thù và giành chiến thắng trong các cuộc đấu solo.",
    initiator:
      "Initiators có khả năng thu thập thông tin cũng như kiểm tra các vị trí cho team, cũng là những đặc vụ mở giao tranh cực tốt với bộ kỹ năng giúp toàn đội tự tin lao vào những điểm nóng.",
    sentinel:
      "Sentinels sở hữu bộ kỹ năng giúp bảo vệ site vô cùng mạnh mẽ nhưng cũng mang tới khả năng hỗ trợ tấn công cực ổn đến từ các kỹ năng mang tới hiệu ứng bất lợi cho kẻ địch.",
  };

  document.querySelector(".mo_ta").textContent =
    mo_taRole[role];
}

//Gán sự kiện click cho <a> và xử lý click từ <a> đến <div> agent
document.querySelectorAll('.selection > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.selection a.active').classList.remove('active');
        this.classList.add('active');

        const role = this.getAttribute('data-role');
        filterAgents(role);
    });
});

// Mặc định là hiển thị tất cả agents trước
window.onload = function() {
    filterAgents('all');
};
