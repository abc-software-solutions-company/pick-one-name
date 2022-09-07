import {yupResolver} from '@hookform/resolvers/yup';
import cn from 'classnames';
import jsonp from 'jsonp';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import React, {useState} from 'react';
import {Resolver, useForm} from 'react-hook-form';
import * as yup from 'yup';

import Confirmation from '@/components/common/confirmation';
import AbcIconLoading from '@/components/icons/abc-loading';
import {ROUTES} from '@/configs/routes.config';

import styles from './styles.module.scss';

interface IProps {
  className: keyof typeof styles;
  headingText?: string;
  headingTextVisible?: boolean;
  successButtonVisible?: boolean;
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  subject: string;
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || '';
const inputClass = 'form-input';
const inputInvalidClass = 'invalid mt-0.5';

const ContactForm: React.FC<IProps> = ({
  className,
  headingText,
  headingTextVisible,
  successButtonVisible
}) => {
  const {t} = useTranslation('common');
  const router = useRouter();
  const validateResolver: Resolver<FormValues> = yupResolver(
    yup.object().shape({
      firstName: yup
        .string()
        .required(t('validate-first-name-required'))
        .min(2, t('validate-first-name-min-length')),
      lastName: yup
        .string()
        .required(t('validate-last-name-required'))
        .min(2, t('validate-last-name-min-length')),
      email: yup
        .string()
        .email(t('validate-email-invalid'))
        .required(t('validate-email-required')),
      phoneNumber: yup
        .string()
        .matches(phoneRegExp, t('validate-phone-number-invalid')),
      subject: yup.string().required(t('validate-subject-required')),
      message: yup.string().required(t('validate-message-required'))
    })
  );
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  };
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormValues>({
    resolver: validateResolver,
    defaultValues
  });
  const getSubmitUrl = (url: string): string =>
    url.replace('/post?', '/post-json?');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const onSubmit = (values: FormValues) => {
    const formData = {
      FNAME: values.firstName,
      LNAME: values.lastName,
      EMAIL: values.email,
      PHONE: values.phoneNumber,
      SUBJECT: values.subject,
      MESSAGE: values.message
    };
    const params = new URLSearchParams(formData);
    const url = `${getSubmitUrl(MAILCHIMP_URL)}&${params.toString()}`;
    setIsLoading(true);

    jsonp(url, {param: 'c'}, (err, data) => {
      setIsLoading(false);

      if (err) {
        setResponse(err);
        return;
      }
      setResponse(data);
    });
  };

  const renderError = (fieldName: string) => {
    if ((errors as any)?.[fieldName]?.message) {
      return (
        <p className={inputInvalidClass}>
          {(errors as any)[fieldName].message}
        </p>
      );
    }

    return null;
  };

  const handleBack = () => {
    setResponse(null);
    router.push(ROUTES.HOME);
  };

  return (
    <div className={cn(styles['contact-form'], styles[className])}>
      <div className="container">
        <div className="inner">
          {headingText && headingTextVisible && (
            <h2 className="heading">
              <span>{t(headingText)}</span>
            </h2>
          )}
          {!response && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid">
                <div className="input-group">
                  <input
                    className={cn(inputClass, !!errors?.firstName && 'error')}
                    type="text"
                    placeholder={t('contact-input-first-name')}
                    {...register('firstName')}
                  />
                  {renderError('firstName')}
                </div>
                <div className="input-group">
                  <input
                    className={cn(inputClass, !!errors?.lastName && 'error')}
                    type="text"
                    placeholder={t('contact-input-last-name')}
                    {...register('lastName')}
                  />
                  {renderError('lastName')}
                </div>
                <div className="input-group">
                  <input
                    className={cn(inputClass, !!errors?.email && 'error')}
                    type="text"
                    placeholder="Email*"
                    {...register('email')}
                  />
                  {renderError('email')}
                </div>
                <div className="input-group">
                  <input
                    className={cn(inputClass, !!errors?.phoneNumber && 'error')}
                    type="text"
                    placeholder={t('contact-input-phone-number')}
                    {...register('phoneNumber')}
                  />
                  {renderError('phoneNumber')}
                </div>
              </div>
              <div className="input-group mt-3">
                <input
                  className={cn(inputClass, !!errors?.subject && 'error')}
                  type="text"
                  placeholder={t('contact-input-subject')}
                  {...register('subject')}
                />
                {renderError('subject')}
              </div>
              <div className="input-group desc mt-3">
                <textarea
                  className={cn(inputClass, !!errors?.message && 'error')}
                  placeholder={t('contact-input-message')}
                  {...register('message')}
                ></textarea>
                {renderError('message')}
              </div>
              <button className="btn" type="submit" disabled={isLoading}>
                <>
                  {isLoading && (
                    <AbcIconLoading className="mr-2 animate-spin" />
                  )}
                  {isLoading
                    ? t('contact-button-sending')
                    : t('contact-button-submit')}
                </>
              </button>
            </form>
          )}
          {response?.result === 'error' && (
            <Confirmation
              icon="failure"
              title={t('contact-submit-fail-title')}
              message={t('contact-submit-fail-msg')}
              btnText={t('contact-submit-fail-btn')}
              onBtnClick={() => setResponse(null)}
            />
          )}
          {response?.result === 'success' && (
            <Confirmation
              icon="success"
              title=" "
              message={t('contact-submit-success-msg')}
              btnText={t('contact-submit-success-btn')}
              onBtnClick={handleBack}
              buttonVisible={successButtonVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ContactForm.displayName = 'ContactForm';
ContactForm.defaultProps = {
  headingText: 'contact',
  headingTextVisible: true,
  successButtonVisible: true
};

export default ContactForm;
