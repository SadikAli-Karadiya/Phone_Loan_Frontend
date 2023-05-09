import * as Yup from "yup";

export const customerSchema = Yup.object({
    first_name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Your First Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    last_name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Your Last Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    whatsapp_no: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no")
        .max(10, "Please enter valid mobile no")
        .required("Please Enter Your Mobile Number"),

    alternate_mobile: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no").max(10, "Please Enter Valid Mobile No"),

    dob: Yup.date()
        .max(new Date(), 'Please select valid DOB')
        .required("Please Enter Your Date Of Birth")
        .nullable(),

    gender: Yup.string().required("Please Select Gender"),

    address: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .required("Please Enter Your Address"),

    refrence: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Reference Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    refrence_no: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no")
        .max(10, "Please enter valid mobile no")
        .required("Please Enter Reference Mobile No"),

    date: Yup.date()
        .max(new Date(), 'Please select valid date')
        .required("Please Enter Date")
        .nullable(),

    installment: Yup.string().required("Please Select Company"),

    installment: Yup.string().required("Please Select Model"),

    price: Yup.string().required("Please Enter Price"),

    installment: Yup.string().required("Please Select Installment"),

    dp: Yup.string().required("Please Enter Down Payment"),
    
    net_payable: Yup.string().required("Please Enter Net Payable Amount"),

    note: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        }),

});


export const initialValues = {
    first_name: "",
    last_name: "",
    whatsapp_no: "",
    alternate_mobile: "",
    dob: "",
    gender: "",
    address: "",
    refrence: "",
    refrence_no: "",
    date: "",
    company: "",
    model: "",
    price: "",
    installment: "",
    dp: "",
    discount: "",
    net_payable: ""

}
