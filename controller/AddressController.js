import { child, get, getDatabase, ref, set } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getMakh = async () => {
    try {
        const makh = await AsyncStorage.getItem("makhachhang");
        if (makh !== null) {
            return makh;
        }
    } catch (error) {}
};

const getNewId = async () => {
    const dbRef = ref(getDatabase());
    const makh = await getMakh();
    try {
        const addressesSnapshot = await get(child(dbRef, `DiaChi/${makh}`));
        const addresses = addressesSnapshot.val();

        if (addresses) {
            const currentId = parseInt(Object.keys(addresses)[Object.keys(addresses).length - 1].slice(2));

            const newId = "DC" + String(currentId + 1).padStart(4, "0");
            console.log(newId);
            return newId;
        } else {
            return "DC0001";
        }
    } catch (err) {
        console.log(err);
    }
};

const addAddress = async (name, phone, detail_address, location) => {
    const makh = await getMakh();
    const db = getDatabase();
    const newId = await getNewId();
    try {
        await set(ref(db, `DiaChi/${makh}/${newId}`), {
            HoTen: name,
            SoDienThoai: phone,
            DiaChi: detail_address + " " + location.address,
            latitude: location.latitude,
            longtitude: location.longtitude,
            Default: false,
        });
        return [true, "Thêm địa chỉ thành công"];
    } catch (err) {
        console.log(err);
        return [false, "Thêm địa chỉ thất bại"];
    }
};

const getAddress = async () => {
    const makh = await getMakh();
    const dbRef = ref(getDatabase());

    try {
        const addressesSnapshot = await get(child(dbRef, `DiaChi/${makh}`));
        const addresses = addressesSnapshot.val();

        return addresses;
    } catch (err) {
        console.log(err);
    }
};

const setDefaultAddress = async (key) => {
    const addresses = await getAddress();
    const makh = await getMakh();
    const db = getDatabase();

    try {
        await set(ref(db, `DiaChi/${makh}/${key}`), {
            ...addresses[key],
            Default: true,
        });

        for (const addressKey in addresses) {
            if (addressKey !== key) {
                await set(ref(db, `DiaChi/${makh}/${addressKey}`), {
                    ...addresses[addressKey],
                    Default: false,
                });
            }
        }
    } catch (err) {
        console.log(err)
        return err;
    }
};

export { addAddress, getAddress, setDefaultAddress };
