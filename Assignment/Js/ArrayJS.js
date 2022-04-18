  var danhSachTinhThanh = new Array(
        {ID: 1,name: "An Giang"},
        {ID: 2,name: "Bà rịa – Vũng tàu"},
        {ID: 3,name: "Bắc Giang"},
        {ID: 4,name: "Bắc Kạn"},
        {ID: 5,name: "Bạc Liêu"},
        {ID: 6,name: "Bắc Ninh"},
        {ID: 7,name: "Bến Tre"},
        {ID: 8,name: "Bình Định"},
        {ID: 9,name: "Bình Dương"},
        {ID: 10,name: "Bình Phước"},
        {ID: 11,name: "Bình Thuận"},
        {ID: 12,name: "Cà Mau"},
        {ID: 13,name: "Cần Thơ"},
        {ID: 14,name: "Cao Bằng "},
        {ID: 15,name: "Đà Nẵng"},
        {ID: 16,name: "Đắk Lắk"},
        {ID: 17,name: "Đắk Nông"},
        {ID: 18,name: "Điện Biên"},
        {ID: 19,name: "Đồng Nai"},
        {ID: 20,name: "Đồng Tháp"},
        {ID: 21,name: "Gia Lai"},
        {ID: 22,name: "Hà Giang"},
        {ID: 23,name: "Hà Nam"},
        {ID: 24,name: "Hà Nội "},
        {ID: 25,name: "Hà Tĩnh"},
        {ID: 26,name: "Hải Dương"},
        {ID: 27,name: "Hải Phòng"},
        {ID: 28,name: "Hậu Giang"},
        {ID: 29,name: "Hòa Bình"},
        {ID: 30,name: "Hưng Yên"},
        {ID: 31,name: "Khánh Hòa"},
        {ID: 32,name: "Kiên Giang"},
        {ID: 33,name: "Kon Tum"},
        {ID: 34,name: "Lai Châu"},
        {ID: 35,name: "Lâm Đồng"},
        {ID: 36,name: "Lạng Sơn"},
        {ID: 37,name: "Lào Cai"},
        {ID: 38,name: "Long An"},
        {ID: 39,name: "Nam Định"},
        {ID: 40,name: "Nghệ An"},
        {ID: 41,name: "Ninh Bình"},
        {ID: 42,name: "Ninh Thuận"},
        {ID: 43,name: "Phú Thọ"},
        {ID: 44,name: "Phú Yên"},
        {ID: 45,name: "Quảng Bình"},
        {ID: 46,name: "Quảng Nam"},
        {ID: 47,name: "Quảng Ngãi"},
        {ID: 48,name: "Quảng Ninh"},
        {ID: 49,name: "Quảng Trị"},
        {ID: 50,name: "Sóc Trăng"},
        {ID: 51,name: "Sơn La"},
        {ID: 52,name: "Tây Ninh"},
        {ID: 53,name: "Thái Bình"},
        {ID: 54,name: "Thái Nguyên"},
        {ID: 55,name: "Thanh Hóa"},
        {ID: 56,name: "Thừa Thiên Huế"},
        {ID: 57,name: "Tiền Giang"},
        {ID: 58,name: "Thành phố Hồ Chí Minh"},
        {ID: 59,name: "Trà Vinh"},
        {ID: 60,name: "Tuyên Quang"},
        {ID: 61,name: "Vĩnh Long"},
        {ID: 62,name: "Vĩnh Phúc"},
        {ID: 63,name: "Yên Bái"}
    );
function changeColor(){
    if(window.location.href.includes("index.html")){
        if(document.documentElement.scrollTop>600){
            document.getElementById("navBarFunction").style.top = "-100px";
        }else{
             document.getElementById("navBarFunction").style.top = "0";
        }
    }else{
        if(document.documentElement.scrollTop>1){
            document.getElementById("navBarFunction").style.top = "-100px";
        }else{
             document.getElementById("navBarFunction").style.top = "0";
        }
    }
}
var account = new Array(
    {tenDayDu: "Nguyễn Ngọc Thái Duy", email: "thaiduynguyen.nt@gmail.com", matKhau: "123456", gioiTinh: "Nam", diaChi: "Thành phố Hồ Chí Minh", dienThoai: "0912571469", cmnd: "058202008844", soBaiTestDaHoanThanh: 0},
    {tenDayDu: "Nguyễn Ngọc Thái Duy", email: "duynntps16703@fpt.edu.vn", matKhau: "123456", gioiTinh: "Nam", diaChi: "Thành phố Hồ Chí Minh", dienThoai: "0912571469", cmnd: "058202008844", soBaiTestDaHoanThanh: 0}
)
function countTime(time){
    return Math.floor(time*100/180);
}
function getAccount(email){
    for(var i = 0; i < account.length; i++){
        if(account[i].email == email){
            return account[i];
        }
    }
    return null;
}
function updateAccount(object){
    for(var i = 0; i < account.length; i++){
        if(account[i].email == object.email){
            alert("Account have been found");
            account[i] = object;
        }
    }
}
function getTestList(number){
    switch(number){
        case 1: return testColor; break;
        case 2: return testPerspective; break;
        case 3: return testShade; break;
        case 4: return testStructor; break;
        case 5: return testAnatomy; break;
    }
}
function checkInTest(number){
    for(var i = 0; i < testArrayCoBan.length ;i++){
        if(testArrayCoBan[i].img == number) return 1;
    }
    for(var i = 0; i < testArrayNangCao.length ;i++){
        if(testArrayNangCao[i].img == number) return 2;
    }
    return 0;
}
function getTestObject(number){
    for(var i = 0; i < testArrayCoBan.length ;i++){
        if(testArrayCoBan[i].img == number) return testArrayCoBan[i];
    }
    for(var i = 0; i < testArrayNangCao.length ;i++){
        if(testArrayNangCao[i].img == number) return testArrayNangCao[i];
    }
    return null;

}
function loginFunction(email, password){
    for(var i = 0; i < account.length; i++){
        if(account[i].email == email && account[i].matKhau == password){
            return true;
        }
    }
    return false;
}
function getPassword(email){
    for(var i = 0; i < account.length; i++){
        if(account[i].email == email){
            return account[i].matKhau;
        }
    }
    return null;
}
const testArrayCoBan = new Array(
    { img: "1", title: "Bài kiểm tra về màu sắc", description: "Nhằm phục vụ kiến thức cho các bạn mới vào nghề vẽ, thì bài kiểm tra này sẽ giúp các bạn hiểu hơn về màu sắc" },
    { img: "2", title: "Bài kiểm tra về phối cảnh", description: "Phối cảnh là một trong những thành phần quan trọng trong việc vẽ, bài kiểm tra sẽ giúp nâng cao kỹ năng của bạn" },
    { img: "3", title: "Bài kiểm tra về sắc độ", description: "Sắc độ sẽ là bài kiểm tra khá khó cho những bạn không nắm chắc 2 bài kiểm tra đầu tiên" }
);
const testArrayNangCao = new Array(
    { img: "4", title: "Bài kiểm tra về cấu trúc", description: "Một người có kỹ năng vẽ cấu trức tốt, sẽ giúp cho bức tranh mình có trình tự và phong phú hơn" },
    { img: "5", title: "Bài kiểm tra về Anatomy", description: "Giải phẫu con người là một vấn đề khá lớn đối với chúng ta" }
);
const testColor = new Array(
    {ID: 1, Question:"Trong dải màu sắc, có tổng cộng bao nhiều màu bật nhất", A1:"4", A2:"5", A3: "3", Answer: "3"},
    {ID: 2, Question:"Các màu bậc nhất bao gồm", A1:"Trắng, Đỏ, Tím", A2:"Tất cả đều đúng", A3: "Đỏ, Vàng, Xanh", Answer: "Đỏ, Vàng, Xanh"},
    {ID: 3, Question:"Việc phối màu một cách ngẫu nhiên, sẽ cho ra sự pha trộn tinh tế. Nhận định này đúng hay sai?", A1:"Đúng", A2:"Tuỳ trường hợp", A3: "Sai", Answer: "Sai"},
    {ID: 4, Question:"Định nghĩa đúng về các màu trung tính?", A1:"Màu trung tính là các màu 'bằng' nhau về mọi mặt", A2:"Không có ý nghĩa gì lắm", A3: "Là những gam màu đặc biệt, ít hoặc khó phối với các màu bình thường khác ", Answer: "Là những gam màu đặc biệt, ít hoặc khó phối với các màu bình thường khác "},
    {ID: 5, Question:"Mã màu hex bao gồm pattern như nào?", A1:"RGB(Number, Number, Number)", A2:"Nào cũng đúng hết", A3: "#ABC123", Answer: "#ABC123"},
    {ID: 6, Question:"Trong các nguyên tắc phối màu đơn giản, việc chỉ phối một gam màu thuộc về nguyên tắc?", A1:"Nguyên tắt phối màu tương đồng", A2:"Nguyên tắc phối màu bổ túc", A3: "Nguyên tắc phối màu đơn sắc", Answer: "Nguyên tắc phối màu đơn sắc"},
    {ID: 7, Question:"Sử dụng mỗi nguyên tắc phối màu đơn sắc sẽ cho ra sự pha trộn đơn giản, không có gì nổi bậc", A1:"Đúng với mọi trường hợp", A2:"Luôn luôn sai", A3: "Tuỳ vào mục đích phối màu", Answer: "Tuỳ vào mục đích phối màu"},
    {ID: 8, Question:"Các màu sắc bật cao chính là sự pha trộn từ các màu có bậc thấp hơn, vậy việc sử dụng màu sắc bậc cao sẽ cho ra thành phẩm phóng khoản và nổi bậc hơn là chỉ sài sắc màu bậc 1. Đúng hay sai?", A1:"Tuỳ trường hợp", A2:"Sai", A3: "Đúng", Answer: "Đúng"},
    {ID: 9, Question:"Định nghĩa màu lạnh?", A1:"Là những màu nhìn vào thấy mát", A2:"là những màu thường được phối với các màu trung tính", A3: "màu lạnh là những màu của ban đêm, bao gồm xanh lá, xanh lam và xanh lục, cho các giác mát mẻ, tự nhiên", Answer: "màu lạnh là những màu của ban đêm, bao gồm xanh lá, xanh lam và xanh lục, cho các giác mát mẻ, tự nhiên"},
    {ID: 10, Question:"Màu nóng và màu lạnh có nên phối với nhau?", A1:"nên 100%", A2:"hoàn toàn không nên", A3: "Tuỳ trường hợp", Answer: "Tuỳ trường hợp"},
);
const testPerspective = new Array(
    {ID: 1, Question:"Phối cảnh là gì?", A1:"Là sự pha trộn hài hoã giữa thiên nhiên và cảnh vật tự nhiên", A2:"Là những điểm tụ thu hep về một phía", A3: "là hình ảnh, hoặc là tạo hình vẽ đúng theo mắt người", Answer: "là hình ảnh, hoặc là tạo hình vẽ đúng theo mắt người"},
    {ID: 2, Question:"Luật xa gần là gì?", A1:"Là khi càng đi xa, bản thân càng mệt", A2:"Định luật giúp con người phát minh ống nhòm từ xa", A3: "Là một định luật, trong đó các vật ở xa tầm mắt luôn nhỏ hơn khi vật đó ở gần tầm mắt", Answer: "Là một định luật, trong đó các vật ở xa tầm mắt luôn nhỏ hơn khi vật đó ở gần tầm mắt"},
    {ID: 3, Question:"Có bao gồm bao nhiêu điểm tụ tất cả trong hội hoạ?", A1:"Vô số", A2:"3", A3: "5", Answer: "5"},
    {ID: 4, Question:"Mắt người nhìn được tối đa bao nhiêu điểm tụ ngoài đời thật?", A1:"4", A2:"5", A3: "3", Answer: "3"},
    {ID: 5, Question:"Đường chân trời là gì?", A1:"Là đường xuất hiện khi mặt trời lặn", A2:"Đường chạy ngay qua mắt mình khi hướng nhìn thẳng lên trời", A3: "Là các đường thẳng chạy ngang qua các điểm tụ", Answer: "Là các đường thẳng chạy ngang qua các điểm tụ"},
    {ID: 6, Question:"Đường tầm mắt là gì?", A1:"Là đường có hình dạng là một Parapon", A2:"Đường chạy ngang qua tầm mắt có cấu trúc giống đường chân trời", A3: "Là các đường có xu hướng kéo về các điểm tụ, giúp xác định hướng và vóc dáng của vật thể mà nó hút", Answer: "Là các đường có xu hướng kéo về các điểm tụ, giúp xác định hướng và vóc dáng của vật thể mà nó hút"},
    {ID: 7, Question:"Các ngành nghề thật sự cần đến kiến thức của luật phối cảnh?", A1:"Hoạ sĩ, Cảnh sát, Đầu bếp", A2:"Nhiếp ảnh gia, ITer, Marketer", A3: "Hoạ sĩ, Nhiếp ảnh gia, Kiến trúc sư", Answer: "Hoạ sĩ, Nhiếp ảnh gia, Kiến trúc sư"},
    {ID: 8, Question:"Luật phối cảnh xuất hiện ở đâu", A1:"Chỉ ở trong giấy khi ta vẽ nó lên", A2:"Chỉ là lý thuyết", A3: "Xuất hiện ở bất cứ đâu, bất cứ khung cảnh nào mà ta nhìn", Answer: "Xuất hiện ở bất cứ đâu, bất cứ khung cảnh nào mà ta nhìn"},
    {ID: 9, Question:"Nếu có xu hướng chỉ muốn vẽ người và nhân vật, không vẽ vật thể khổng lồ hay khung cảnh. Thì khỏi cần học phối cảnh?", A1:"Tuỳ trường hợp", A2:"Đúng hoàn toàn", A3: "Sai hoàn toàn", Answer: "Sai hoàn toàn"},
    {ID: 10, Question:"Trong hội hoạ, vẽ phối cảnh cần vẽ tối thiểu bao nhiêu điểm tụ", A1:"Càng nhiều càng tốt", A2:"Chỉ có 3 vì mắt người chỉ nhìn được tối đa 3 điểm tụ", A3: "Hoàn toàn tuỳ trường hợp, tuỳ vào mục đích của hoạ sĩ", Answer: "Hoàn toàn tuỳ trường hợp, tuỳ vào mục đích của hoạ sĩ"},
);
const testShade = new Array(
    {ID: 1, Question:"Sắc độ là gì?", A1:"Độ sáng tối của màu sắc", A2:"Là sắc độ của màu tương ứng", A3: "Chỉ đơn giản là máu sắc nhưng đậm và nhạt", Answer: "Chỉ đơn giản là máu sắc nhưng đậm và nhạt"},
    {ID: 2, Question:"Cường độ sắc màu là gì?", A1:"Độ mạnh yếu của sắc màu", A2:"Là một filter trong ảnh kỹ thuật số", A3: "Là độ mạnh hoặc yếu của màu sắc", Answer: "Là độ mạnh hoặc yếu của màu sắc"},
    {ID: 3, Question:"Quang độ sắc màu là gì?", A1:"Là sự kết hợp giữa sắc độ và cường độ", A2:"Sự hoà trộn giữa các màu khác nhau", A3: "Là độ sáng hoặc độ tối của màu sắc", Answer: "Là độ sáng hoặc độ tối của màu sắc"},
    {ID: 4, Question:"Có bao nhiêu màu chính trong Color Wheel(Vòng tròn sắc màu)?", A1:"3", A2:"5", A3: "12", Answer: "12"},
    {ID: 5, Question:"Độ đậm nhạt của bóng của một vật thể dựa vào yếu tố nào?", A1:"Độ sáng của vật thể chiếu lên vật", A2:"Hướng vật bị chiếu lên", A3: "Tuỳ theo hình dạng của góc khuất sáng của vật có che hết ánh sáng hay không", Answer: "Tuỳ theo hình dạng của góc khuất sáng của vật có che hết ánh sáng hay không"},
    {ID: 6, Question:"Một trong những yếu tố tạo nên hình dáng bóng của một vật thể bị chiếu sáng là?", A1:"Hình dáng bóng, sắc độ và phương hướng", A2:"Cấu trúc vật, màu sắc và sự tương phản", A3: "Cấu trúc vật, Phối cảnh vật được chiếu sáng và hình dáng vật", Answer: "Cấu trúc vật, Phối cảnh vật được chiếu sáng và hình dáng vật"},
    {ID: 7, Question:"Trên các bộ phận con người như da, có những chỗ có sắc độ đậm và sắc độ nhạt, nguyên nhân chủ yếu là?", A1:"Cách thức người nhìn vào", A2:"Phối cảnh", A3: "Hướng ánh sách chiếu vào, cấu trúc cơ thể người và sắc độ của từng bộ phận màu da", Answer: "Hướng ánh sách chiếu vào, cấu trúc cơ thể người và sắc độ của từng bộ phận màu da"},
    {ID: 8, Question:"Phản chiếu vật thể là gì?", A1:"Là hiện tượng một vật đứng trước gương", A2:"Là khi vật đó nằm dưới nước", A3: "Là hiện tượng ánh sáng chiếu vào vật hắt lại khu vực bóng râm của vật thể", Answer: "Là hiện tượng ánh sáng chiếu vào vật hắt lại khu vực bóng râm của vật thể"},
    {ID: 9, Question:"Bóng râm càng phản chiếu về xa, thì sẽ có xu hướng hình dáng như nào?", A1:"Bóng râm vẫn sẽ giữ nguyên kích cỡ", A2:"Bóng râm sẽ càng ngày càng đậm lên", A3: "Bóng râm có xu hướng bị giãn, và mờ đi", Answer: "Bóng râm có xu hướng bị giãn, và mờ đi"},
    {ID: 10, Question:"Màu sắc có bóng râm luôn là màu đen, nhận định này đúng hay sai?", A1:"Sai hoàn toàn", A2:"Đúng hoàn toàn", A3: "Tuỳ trường hợp, dựa vào màu của ánh sáng chiếu lên vật và màu sắc của vật thể bị chiếu", Answer: "Tuỳ trường hợp, dựa vào màu của ánh sáng chiếu lên vật và màu sắc của vật thể bị chiếu"},
);
const testStructor = new Array(
    {ID: 1,Question: "Kết cấu của một vật thể là gì?", A1: "Các chi tiết của một vật thể", A2: "Các liên kết trong một vật thể" ,A3: "Các chi tiết nhỏ và các đường liên kết tạo nên khối của một vật thể", Answer: "Các chi tiết nhỏ và các đường liên kết tạo nên khối của một vật thể"},
    {ID: 2,Question: "Tại sao kết cấu lại quan trọng trong hội hoạ", A1: "Không, kết cấu không quan trọng", A2: "Vì kết cấu làm mình tô màu đẹp hơn" ,A3: "Vì kết cấu giúp tạp cảm giác 3D, giúp người xem có cảm giác sờ chạm một vật thể", Answer: "Vì kết cấu giúp tạp cảm giác 3D, giúp người xem có cảm giác sờ chạm một vật thể"},
    {ID: 3,Question: "Kết cấu của một khúc gỗ bao gồm?", A1: "Chỉ có hình khối", A2: "chỉ có màu sắc" ,A3: "Hình khối, màu sắc, các vết sần sùi lâu năm", Answer: "Hình khối, màu sắc, các vết sần sùi lâu năm"},
    {ID: 4,Question: "Các thể loại tranh cần áp dụng kỹ thuật vẽ kết cấu là?", A1: "Tranh Trựu Tượng", A2: "Tranh Phong Cảnh, Tranh Tả Thực" ,A3: "Bất cứ thể loại tranh nào cũng có thể áp dụng kỹ thuật kết cấu", Answer: "Bất cứ thể loại tranh nào cũng có thể áp dụng kỹ thuật kết cấu"},
    {ID: 5,Question: "Các bước để vẽ kết cấu của một vật thể là?", A1: "Vẽ kiểu gì chẳng được", A2: "Xem mẫu->Phác mảng->Vẽ chi tiết->Vẽ khối->..." ,A3: "Xem mẫu->Phác mảng->Vẽ khối->Vẽ chi tiết->...", Answer: "Xem mẫu->Phác mảng->Vẽ khối->Vẽ chi tiết->..."}
)
const testAnatomy = new Array(
    {ID: 1,Question: "Giải phẫu cơ thể người trong hội hoạ là gì?", A1: "Mỗ bụng người ra", A2: "Quan sát thân thể người" ,A3: "Sử dụng các mẫu cơ thể người, quan sát từng bộ phận, kết cấu", Answer: "Sử dụng các mẫu cơ thể người, quan sát từng bộ phận, kết cấu"},
    {ID: 2,Question: "Trong hội hoạ, cơ thể người được chia thành bao nhiều thành phần lớn để tiện lợi trong việc giải phẫu người?", A1: "2", A2: "4" ,A3: "3", Answer: "3"},
    {ID: 3,Question: "Giải phẫu cơ thể người trong hội hoạ có thực sự quan trọng với một số trường phái như vẽ phong cảnh không?", A1: "Có, tuỳ trường hợp", A2: "Không hề quan trọng" ,A3: "Không thực sự quan trọng", Answer: "Không thực sự quan trọng"},
    {ID: 4,Question: "Bộ phận nào có tầm quan trọng nhất để quy định kết cấu bên ngoài còn người?", A1: "Màu da", A2: "Các cơ bắp" ,A3: "Vóc dáng, cơ bắp", Answer: "Vóc dáng, cơ bắp"},
    {ID: 5,Question: "Một bộ có chức năng xác định được 80% vóc dáng con người!! Đó là?", A1: "Não bộ", A2: "Cổ" ,A3: "Xương sống", Answer: "Xương sống"},
)
