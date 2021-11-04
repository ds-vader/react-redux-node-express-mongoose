import * as yup from 'yup';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const withoutNumbers = /^([^0-9]*)$/;
const onlyNumbers = /^[0-9]*$/;

export const schema = yup.object().shape({
  productName: yup
    .string()
    .required()
    .matches(withoutNumbers, 'Without numbers'),
  price: yup.string().required().matches(onlyNumbers, 'Only numbers!'),
  count: yup.string().required().matches(onlyNumbers, 'Only numbers!'),
  manufactureDate: yup
    .date()
    .required()
    .min(new Date('01-01-1970'), 'Too old')
    .max(new Date(), 'Cannot exist'),
  bestBefore: yup
    .date()
    .required()
    .min(yup.ref('manufactureDate'), 'Incorrect date'),
  productImage: yup
    .mixed()
    .test(
      'fileSize',
      'File size too large, max file size is 160 KB',
      (file) => {
        if (file?.type?.match('image.*')) {
          return file.size <= FILE_SIZE;
        } else {
          return true;
        }
      }
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
