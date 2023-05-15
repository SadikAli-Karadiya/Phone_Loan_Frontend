import * as Yup from "yup";

export const NewPhoneSchema = Yup.object({
    date: Yup.date()
        .max(new Date(), 'Please select valid date')
        .required("Please Enter Date")
        .nullable(),

    company: Yup.string().required("Please Select Company"),

    model: Yup.string().required("Please Select Model"),

    price: Yup.string().required("Please Enter Price"),

    installment: Yup.string().required("Please Select Installment"),

    dp: Yup.string().required("Please Enter Down Payment"),

    net_payable: Yup.string(),

    note: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        }),

    adhar_front: Yup.mixed()
        .test("is-valid-type", "Logo should be in jpg, jpeg or png format",
            value => {
                if (!value) {
                    return true; // skip validation if value is empty
                }
                return isValidFileType(value && value.name.toLowerCase(), "image")
            })
        .required("Please Enter Adhar Card")
        .test("is-valid-size", "Max allowed size is 2MB", value => {
            if (!value) {
                return true;
            }
            return value && value.size <= 2097152
        }),

});


export const NewPhoneValues = {
    date: "",
    company: "",
    model: "",
    price: "",
    installment: "",
    dp: "",
    discount: "",
    net_payable: "",
    adhar_front: "",
    adhar_back: "",
    pan: "",
    light_bill: ""

}
