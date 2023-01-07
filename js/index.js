function getEle(ele) {
    return document.getElementById(ele);
}

// BÀI 1: QUẢN LÝ SINH VIÊN
// Hàm trả về điểm dựa theo khu vực
function calcArea(area) {
    switch (area) {
        case "A":
            return 2;
        case "B":
            return 1;
        case "C":
            return 0.5;
        default:
            return 0;
    }
}
// Hàm trả về điểm dựa theo đối tượng
function calcType(type) {
    switch (type) {
        case "1":
            return 2.5;
        case "2":
            return 1.5;
        case "3":
            return 1;
        default:
            return 0;
    }
}

getEle('result').onclick = function () {
    // input
    let standardGrade = +getEle("standardGrade").value;
    let subject1 = +getEle("subject1").value;
    let subject2 = +getEle("subject2").value;
    let subject3 = +getEle("subject3").value;
    let area = getEle("area").value;
    let type = getEle("type").value;
    let totalGrade = 0;
    let areaGrade = calcArea(area);
    let typeGrade = calcType(type);

    // progress
    totalGrade = subject1 + subject2 + subject3 + areaGrade + typeGrade;
    let result = '';
    if (standardGrade > 30 || standardGrade < 0) {
        alert('Điểm chuẩn phải nằm trong phạm vi từ 0 đến 30.')
    }
    else {
        if (subject1 == 0 || subject2 == 0 || subject3 == 0) {
            result = 'Bạn đã rớt do có điểm bằng 0';
        }
        else if (subject1 > 10 || subject2 > 10 || subject3 > 10) {
            alert('Điểm môn tối đa là 10.');
        }
        else if (subject1 < 0 || subject2 < 0 || subject3 < 0) {
            alert('Điểm môn không thể là một số âm.');
        }
        else {
            if (totalGrade >= standardGrade) {
                result = 'Bạn đã đậu với tổng điểm là ' + totalGrade;
            }
            else {
                result = 'Bạn đã rớt với tổng điểm là ' + totalGrade;
            }
        }
    }

    // output
    getEle('passFail').innerHTML = result;
}


// BÀI 2: TÍNH TIỀN ĐIỆN
// 50kw đầu
function KWCalc0(firstKW) {
    let result = firstKW * 500;
    return result;
}
// 50kw tiếp theo
function KWCalc1(nextKW1) {
    let result1 = 50 * 500 + (nextKW1 - 50) * 650;
    return result1;
}
// 100kw tiếp theo
function KWCalc2(nextKW2) {
    let result2 = 50 * 500 + 50 * 650 + (nextKW2 - 100) * 850;
    return result2;
}
// 150kw tiếp theo
function KWCalc3(nextKW3) {
    let result3 = 50 * 500 + 50 * 650 + 100 * 850 + (nextKW3 - 200) * 1100;
    return result3;
}
// Phần còn lại
function KWCalc4(nextKW4) {
    let result4 = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (nextKW4 - 350) * 1300;
    return result4;
}

getEle('bill').onclick = function () {
    // input
    let username = getEle('username').value;
    let KWnum = +getEle('KWnum').value;

    // progress
    let notification = '';
    if (KWnum <= 0) {
        alert('Số kw không hợp lệ! Vui lòng nhập lại.');
    }
    else {
        if (KWnum <= 50) {
            let bill0 = KWCalc0(KWnum);
            notification = 'Họ tên: ' + username + ' , tiền điện của bạn là ' + bill0.toLocaleString() + " VNĐ";
        }
        else if (KWnum > 50 && KWnum <= 100) {
            let bill1 = KWCalc1(KWnum);
            notification = 'Họ tên: ' + username + ' , tiền điện của bạn là ' + bill1.toLocaleString()  + " VNĐ";
        }
        else if (KWnum > 100 && KWnum <= 200) {
            let bill2 = KWCalc2(KWnum);
            notification = 'Họ tên: ' + username + ' , tiền điện của bạn là ' + bill2.toLocaleString()  + " VNĐ";
        }
        else if (KWnum > 200 && KWnum <= 350) {
            let bill3 = KWCalc3(KWnum);
            notification = 'Họ tên: ' + username + ' , tiền điện của bạn là ' + bill3.toLocaleString()  + " VNĐ";
        }
        else {
            let bill4 = KWCalc4(KWnum);
            notification = 'Họ tên: ' + username + ' , tiền điện của bạn là ' + bill4.toLocaleString() + " VNĐ";
        }
    }

    // output
    getEle('totalBill').innerHTML = notification;
}


// BÀI 3: TÍNH THUẾ TNCN
// Hàm tính thu nhập chịu thuế
function TaxableIncome(total, people) {
    let taxableIncome = total - 4e+6 - people * 1.6e+6;
    return taxableIncome;
}

getEle('taxCalc').onclick = function () {
    // input
    let individual = getEle('individual').value;
    let totalIncome = +getEle('totalIncome').value;
    let peopleNumber = +getEle('peopleNumber').value;

    // progress
    let taxableIncome = TaxableIncome(totalIncome, peopleNumber);
    let personalTax = 0;
    let taxReport = '';

    if (totalIncome <= 0) {
        alert('Tổng thu nhập năm phải lớn hơn 0.');
    }
    else if (peopleNumber < 0) {
        alert('Số người phụ thuộc phải lớn hơn hoặc bằng 0.');
    }
    else if (taxableIncome <= 0) {
        alert('Hãy nhập dữ liệu sao cho tiền thuế thu nhập cá nhân phải lớn hơn 0.');
    }
    else {
        if (taxableIncome <= 60e+6) {
            personalTax = taxableIncome * 0.05;
        }
        else if (taxableIncome > 60e+6 && taxableIncome <= 120e+6) {
            personalTax = taxableIncome * 0.1;
        }
        else if (taxableIncome > 120e+6 && taxableIncome <= 210e+6) {
            personalTax = taxableIncome * 0.15;
        }
        else if (taxableIncome > 210e+6 && taxableIncome <= 384e+6) {
            personalTax = taxableIncome * 0.2;
        }
        else if (taxableIncome > 384e+6 && taxableIncome <= 624e+6) {
            personalTax = taxableIncome * 0.25;
        }
        else if (taxableIncome > 624e+6 && taxableIncome <= 960e+6) {
            personalTax = taxableIncome * 0.3;
        }
        else {
            personalTax = taxableIncome * 0.35;
        }
        taxReport = 'Họ tên: ' + individual + ' ⇒ Tiền thuế thu nhập cá nhân của bạn là ' + personalTax.toLocaleString() + ' VND';
    }

    // output
    getEle('totalTax').innerHTML = taxReport;
}


// BÀI 4: TÍNH TIỀN CÁP //
// Hàm ẩn/hiện cho option "Doanh Nghiệp"
function switchType() {
    let customerType = getEle('customerType').value;
    switch (customerType) {
        case "privateHouse":
            getEle('divLinks').style.display = "none";
            break;
        case "business":
            getEle('divLinks').style.display = "block";
            break;
        default:
            getEle('divLinks').style.display = "none";
            break;
    }
}
// Hàm tính tiền cáp cho nhà dân
function privateHouseBill(priChannelNumber) {
    let bill0 = 4.5 + 20.5 + 7.5 * priChannelNumber;
    return bill0;
}
// Hàm tính tiền cáp cho doanh nghiệp có 10 kết nối trở xuống
function businessBill1(busChannelNumber1) {
    let bill1 = 15 + 75 + 50 * busChannelNumber1;
    return bill1;
}
// Hàm tính tiền cáp cho doanh nghiệp có hơn 10 kết nối
function businessBill2(linksNumber, busChannelNumber2) {
    let bill2 = 15 + 75 + (linksNumber - 10) * 5 + 50 * busChannelNumber2;
    return bill2;
}
// Hàm chuẩn hóa cách hiển thị số (tạo dấu phẩy giữa các số ở phần nguyên và phần thập phân thì sẽ được làm tròn thành n chữ số)
Number.prototype.toLocaleFixed = function (n) {
    return this.toLocaleString(undefined, {
        minimumFractionDigits: n,
        maximumFractionDigits: n
    });
};

getEle('ChannelBill').onclick = function () {
    // input
    let customerType = getEle('customerType').value;
    let customerID = getEle('customerID').value;
    let channelNumber = +getEle('channelNumber').value;
    let linksNumber = +getEle('linksNumber').value;

    // progress
    let finalBill = '';
    if (!customerID) {
        alert('Vui lòng nhập mã khách hàng.');
    }
    else {
        switch (customerType) {
            case "privateHouse":
                let priBill = privateHouseBill(channelNumber);
                finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + priBill.toLocaleFixed(2);
                break;
            case "business":
                if (linksNumber > 0 && linksNumber <= 10) {
                    let busBill1 = businessBill1(channelNumber);
                    finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + busBill1.toLocaleFixed(2);
                }
                else if (linksNumber > 10) {
                    let busBill2 = businessBill2(linksNumber, channelNumber);
                    finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + busBill2.toLocaleFixed(2);
                }
                else if (channelNumber < 0 || linksNumber <= 0) {
                    alert('Dữ liệu không hợp lệ.');
                }
                break;
            default:
                alert('Hãy chọn loại khách hàng.');
                break;
        }
    }

    // output
    getEle('totalBill').innerHTML = finalBill;
}