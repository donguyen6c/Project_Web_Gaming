window.onload = function() {
    // Function to handle thumbnail click with smooth transition
    function updateMainImage(thumbnailContainerClass) {
        let thumbnails = document.querySelectorAll(`.${thumbnailContainerClass} .sub`);
        let mainImage = document.querySelector(`.${thumbnailContainerClass} .df`);
        
        thumbnails.forEach(function(thumbnail) {
            thumbnail.onclick = function() {
                // Làm mờ ảnh chính
                mainImage.style.opacity = 0;

                // Chờ 0,2 giây trước khi đổi ảnh chính
                setTimeout(() => {
                    mainImage.src = this.src;
                    // Sau khi đổi ảnh, làm ảnh chính hiện lại
                    mainImage.style.opacity = 1;
                }, 200); // 200ms = 0,2s
            };
        });
    }

    // Update images for each map
    updateMainImage('sunset');
    updateMainImage('lotus');
    updateMainImage('icebox');
    updateMainImage('frac');
};
