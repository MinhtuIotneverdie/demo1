// Khởi tạo gauge
var gaugeReading = document.querySelector('.gauge-reading');
var gaugeNeedle = document.querySelector('.gauge-needle');

// Hàm để cập nhật gauge với dữ liệu độ ẩm mới
function updateGauge(humidity)
{
    // Tính góc quay cho kim đo độ ẩm
    var angle = (humidity / 100) * 180 - 90;
    gaugeNeedle.style.transform = 'rotate(' + angle + 'deg)';

    // Hiển thị giá trị độ ẩm
    gaugeReading.textContent = humidity + '%';
}

// Hàm để lấy dữ liệu độ ẩm từ máy chủ
function getHumidityData() {
    // Gửi yêu cầu GET đến máy chủ hoặc API của bạn để lấy dữ liệu độ ẩm
    // Ví dụ: Sử dụng fetch hoặc XMLHttpRequest
    fetch('/get_humidity_data/')
        .then(response => response.json())
        .then(data => {
            var humidity = data.humidity; // Dữ liệu độ ẩm từ máy chủ
            updateGauge(humidity); // Cập nhật gauge với dữ liệu mới
        })
        .catch(error => {
            console.error('Error fetching humidity data:', error);
        });
}

// Cập nhật dữ liệu độ ẩm mỗi 5 giây
setInterval(getHumidityData, 5000);

// Khởi chạy cập nhật ban đầu
getHumidityData();


//button and slider

var button = document.getElementById('myButton');
var originalText = 'Manual';
var newText = 'Auto';
var isClicked = false;

var button_pump = document.getElementById('modepump');
var originalText_pump = 'OFF';
var newText_pump = 'ON';
var isClicked_pump = false;

button.addEventListener('click', function(event) {
    event.preventDefault();

    if (isClicked) {
        button.textContent = originalText;
        button.title = originalText;
        button.classList.remove('clicked');
        isClicked = false;
    } else {
        button.textContent = newText;
        button.title = newText;
        button.classList.add('clicked');
        isClicked = true;
    }
});

button_pump.addEventListener('click', function(event) {
    event.preventDefault();

    if (isClicked_pump) {
        button_pump.textContent = originalText_pump;
        button_pump.title = originalText_pump;
        button_pump.classList.remove('clicked');
        isClicked_pump = false;
    } else {
        button_pump.textContent = newText_pump;
        button_pump.title = newText_pump;
        button_pump.classList.add('clicked');
        isClicked_pump = true;
    }
});

 var slider1 = document.getElementById('slider1');
 var slider1value =document.getElementById('slider1Value');
 var slider2value =document.getElementById('slider2Value');
 var slider2 = document.getElementById('slider2');  
 slider1.addEventListener('input', function() {
// Update the value of slider1 in a hidden input field
document.getElementById('slider1Value').value = slider1.value;
slider1value.textContent = slider1.value;
});

  slider2.addEventListener('input', function() {
// Update the value of slider2 in a hidden input field
document.getElementById('slider2Value').value = slider2.value;
slider2value.textContent = slider2.value;
});