import * as Yup from "yup";

export const PhoneSchema = Yup.object({
    iemi: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid IEMI no")
        .max(10, "Please enter valid IEMI no")
        .required("Please Enter IEMI Number"),
});

export const NewPhoneValues = {
    date: "",
    company_name: "",
    ram: "",
    storage: "",
    model: "",
    iemi : "",
    price: "",
    installment: "",
    dp: "",
    net_payable: "",
}
