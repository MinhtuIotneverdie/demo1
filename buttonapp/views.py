from django.http import JsonResponse
from django.shortcuts import render
from .forms import ButtonForm , sliderForm # Import form đã tạo


def button_view(request):
    response_data = {'value': 0} # khởi tạo giá trị ban đầu của  button là 0
    form_button1 = ButtonForm() # khởi tạo form_button1 trước khi sử dụng
    if request.method == 'POST':
        
        form_button1 = ButtonForm(request.POST)  # Tạo một instance của form từ dữ liệu POST
        if form_button1.is_valid():
            # Form hợp lệ, thực hiện các xử lý ở đây (nếu cần)
            response_data ['value'] = 1 
            return JsonResponse(response_data)
        else:
            form_button1 = ButtonForm()  # Tạo một instance của form rỗng

    return render(request, 'buttonapp/button.html', {'form':form_button1})
def slider_view(request):
    form_slider1 = slider_form() # khởi tạo form_slider1 trước khi sử dụng
    if request.method == 'POST':
        form_slider1 = slider_form(request.POST)
        if form_slider1.is_valid():
            slider_value = form.cleaned_data['slider1']
            response_data ={'message': f'Slider value received: {slider_value}'}
            return JsonResponse(request_data)
        else:
            form_slider1 = slider_form()
    return render(request,'button.html',{'form1' : form_slider1})        

def get_humidity_data(request):
    # Trong thực tế, bạn sẽ lấy dữ liệu độ ẩm từ máy chủ thời gian thực
    # Đoạn mã dưới đây chỉ là ví dụ cố định giá trị để minh họa
    humidity_data = {'humidity': '60.5'}  # Giả định độ ẩm là 60.5%
    return JsonResponse(humidity_data)
    return render(request,'button.html',{'form1' : form_slider1})   