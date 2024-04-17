import { child, get, getDatabase, ref, set } from "firebase/database";

const getNewId = async () => {
    const dbRef = ref(getDatabase());
    try {
        const usersSnapshot = await get(child(dbRef, 'KhachHang/'));
        const users = usersSnapshot.val();
        
        if (users) {
            const currentId = parseInt(Object.keys(users)[Object.keys(users).length - 1].slice(2));
            
            const newId = 'KH' + String(currentId + 1).padStart(4, '0');
            return newId;
        } else {
            return 'KH0001';
        }
    } catch (err) {
        console.log(err);
    }
}

const Register = async (username, email, password) => {
    const newId = await getNewId();
    const db = getDatabase();
    const currentTime = new Date();
    const dateCreated = currentTime.toLocaleDateString('vi-VN');
    set(ref(db, 'NguoiDung/' + newId), {
        TaiKhoan: username,
        Email: email,
        MatKhau: password,
        VaiTro: "2",
        CCCD_CMND: "",
        DiaChi: "",
        GioiTinh: "",
        HoTen: "",
        MaNguoiDung: "",
        NgayTao: dateCreated,
        SoDienThoai: "",
        HinhAnh: "",
        NgaySinh: "",
    })

    set(ref(db, 'KhachHang/' + newId), {
        DiemTichLuy: 0,
        MaKhachHang: newId,
    });
}

export { Register };