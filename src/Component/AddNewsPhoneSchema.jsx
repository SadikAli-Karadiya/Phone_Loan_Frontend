import * as Yup from "yup";

export const NewPhoneSchema = Yup.object({
    date: Yup.date()
        .required("Please Enter Date")
        .nullable(),
});

let Today = new Date()
export const NewPhoneValues = {
    date: "",
    company: "",
    ram: "",
    storage: "",
    model: "",
    price: "",
    installment: "",
    dp: "",
    net_payable: "",
}
