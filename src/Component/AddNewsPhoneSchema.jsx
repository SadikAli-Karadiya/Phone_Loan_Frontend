import * as Yup from "yup";

export const NewPhoneSchema = Yup.object({
    date: Yup.date()
        .required("Please Enter Date")
        .nullable(),

    // company: Yup.string().required("Please Select Company"),

    // model: Yup.string().required("Please Select Model"),

    // price: Yup.string().required("Please Enter Price"),

    // installment: Yup.string().required("Please Select Installment"),

    // dp: Yup.string().required("Please Enter Down Payment"),

    // net_payable: Yup.string(),
});


export const NewPhoneValues = {
    date: "",
    company: "",
    ram : "",
    storage : "",
    model: "",
    price: "",
    installment: "",
    dp: "",
    net_payable: "",
}
